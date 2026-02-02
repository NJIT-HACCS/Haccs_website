import React from "react";

const DecorativeCircles: React.FC = () => {
  return (
    <>
      {/* Large circle - top left */}
      <div className="decorative-circle animate-float -left-32 top-20 h-80 w-80" />
      
      {/* Medium circle - middle left */}
      <div className="decorative-circle animate-float-delayed -left-20 top-[500px] h-48 w-48" />
      
      {/* Small circle - lower left */}
      <div className="decorative-circle animate-float -left-10 top-[800px] h-32 w-32" />
    </>
  );
};

export default React.memo(DecorativeCircles);
