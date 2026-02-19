import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";

const HeroNetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    let width = 0;
    let height = 0;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const projectPoint = (x: number, y: number, z: number) => {
      const radius = Math.min(width, height) * 0.34;
      const focal = Math.min(width, height) * 1.2;
      const scale = focal / (focal + z * radius);
      return {
        x: x * radius * scale + width / 2,
        y: y * radius * scale + height / 2,
        alpha: Math.max(0.12, scale * 0.95),
      };
    };

    const rotate = (x: number, y: number, z: number, ax: number, ay: number) => {
      const cosY = Math.cos(ay);
      const sinY = Math.sin(ay);
      const x1 = x * cosY + z * sinY;
      const z1 = -x * sinY + z * cosY;

      const cosX = Math.cos(ax);
      const sinX = Math.sin(ax);
      const y2 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;

      return { x: x1, y: y2, z: z2 };
    };

    const ringLatitudes = [-60, -40, -20, 0, 20, 40, 60];
    const ringSegments = 56;
    const meridianCount = 13;
    const meridianSegments = 30;

    const drawFrame = (t: number) => {
      const time = t * 0.00042;
      const ax = Math.sin(time * 1.2) * 0.25;
      const ay = time;

      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = "rgba(255, 132, 102, 0.24)";

      ringLatitudes.forEach((latDeg) => {
        const lat = (latDeg * Math.PI) / 180;
        const cosLat = Math.cos(lat);
        const sinLat = Math.sin(lat);

        ctx.beginPath();
        for (let i = 0; i <= ringSegments; i += 1) {
          const theta = (i / ringSegments) * Math.PI * 2;
          const baseX = cosLat * Math.cos(theta);
          const baseY = sinLat;
          const baseZ = cosLat * Math.sin(theta);
          const p = rotate(baseX, baseY, baseZ, ax, ay);
          const q = projectPoint(p.x, p.y, p.z);

          if (i === 0) ctx.moveTo(q.x, q.y);
          else ctx.lineTo(q.x, q.y);
        }
        ctx.stroke();
      });

      for (let m = 0; m < meridianCount; m += 1) {
        const phi = (m / meridianCount) * Math.PI * 2;

        ctx.beginPath();
        for (let i = 0; i <= meridianSegments; i += 1) {
          const v = i / meridianSegments;
          const lat = (v - 0.5) * Math.PI;
          const baseX = Math.cos(lat) * Math.cos(phi);
          const baseY = Math.sin(lat);
          const baseZ = Math.cos(lat) * Math.sin(phi);
          const p = rotate(baseX, baseY, baseZ, ax, ay);
          const q = projectPoint(p.x, p.y, p.z);

          if (i === 0) ctx.moveTo(q.x, q.y);
          else ctx.lineTo(q.x, q.y);
        }
        ctx.stroke();
      }

      for (let i = 0; i < 140; i += 1) {
        const spread = i / 140;
        const lat = (spread * 2 - 1) * (Math.PI / 2);
        const lon = (i * 2.399963) % (Math.PI * 2);
        const baseX = Math.cos(lat) * Math.cos(lon);
        const baseY = Math.sin(lat);
        const baseZ = Math.cos(lat) * Math.sin(lon);
        const p = rotate(baseX, baseY, baseZ, ax, ay);
        const q = projectPoint(p.x, p.y, p.z);
        const dot = 1.2 + Math.max(0, p.z) * 1.1;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 145, 116, ${q.alpha * 0.66})`;
        ctx.arc(q.x, q.y, dot, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        rafId = requestAnimationFrame(drawFrame);
      }
    };

    setSize();
    drawFrame(0);
    if (!prefersReducedMotion) {
      rafId = requestAnimationFrame(drawFrame);
    }

    const onResize = () => setSize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <Box
      w="100%"
      h="100%"
      borderRadius="full"
      bg="radial-gradient(circle at 50% 50%, rgba(255,127,93,0.15) 0%, rgba(255,127,93,0.03) 42%, rgba(0,0,0,0) 72%)"
      filter="drop-shadow(0 0 16px rgba(255, 129, 97, 0.22))"
    >
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
    </Box>
  );
};

export default React.memo(HeroNetworkCanvas);
