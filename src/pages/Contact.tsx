import {
  Alert,
  Box,
  Container,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Mail, MapPin, Linkedin, Instagram, CircleAlert, CircleCheck } from "lucide-react";
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";

const HACCS_EMAIL = "njithaccs@gmail.com";
const NETLIFY_FORM_NAME = "haccs-contact";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? "")}`)
    .join("&");

const DiscordIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState(null);
    setIsSubmitting(true);

    try {
      const payload = {
        "form-name": NETLIFY_FORM_NAME,
        "bot-field": "",
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      };

      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setSubmitState({ type: "success", message: "Message sent successfully. We'll reach out to you soon." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitState({
        type: "error",
        message: `Message could not be sent right now. Please email us directly at ${HACCS_EMAIL}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Container maxW="1400px" px={{ base: 4, md: 8, lg: 16 }} py={20}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={16}>
          {/* Left Side - Info */}
          <VStack align="flex-start" gap={8}>
            <VStack align="flex-start" gap={4}>
              <Text
                fontFamily="heading"
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight={900}
                color="haccs.cream"
                textTransform="uppercase"
              >
                HACCS
              </Text>
              <Text fontFamily="heading" fontSize={{ base: "xl", md: "2xl" }} color="haccs.coral">
                CONTACT US
              </Text>
              <Box w="80px" h="3px" bg="haccs.coral" />
            </VStack>

            <Text fontSize="lg" color="whiteAlpha.700" lineHeight={1.8}>
              Have questions about HACCS? Want to get involved or partner with us? We'd love to hear from you!
            </Text>

            {/* Contact Info */}
            <VStack align="flex-start" gap={4} mt={4}>
              <HStack>
                <Box
                  w="40px"
                  h="40px"
                  borderRadius="full"
                  bg="haccs.coral"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                >
                  <Mail size={18} />
                </Box>
                <Text color="whiteAlpha.800">{HACCS_EMAIL}</Text>
              </HStack>
              <HStack>
                <Box
                  w="40px"
                  h="40px"
                  borderRadius="full"
                  bg="haccs.coral"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                >
                  <MapPin size={18} />
                </Box>
                <Text color="whiteAlpha.800">New Jersey Institute of Technology, Newark, NJ</Text>
              </HStack>
            </VStack>

            {/* Social Links */}
            <HStack gap={4} mt={4}>
              <ChakraLink href="https://discord.gg/Se5wAXzKDE" target="_blank">
                <Box
                  w="50px"
                  h="50px"
                  borderRadius="full"
                  border="2px solid"
                  borderColor="haccs.coral"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="haccs.coral"
                  _hover={{ bg: "haccs.coral", color: "white" }}
                  transition="all 0.3s"
                >
                  <DiscordIcon />
                </Box>
              </ChakraLink>
              <ChakraLink href="https://www.instagram.com/njit_haccs/" target="_blank">
                <Box
                  w="50px"
                  h="50px"
                  borderRadius="full"
                  border="2px solid"
                  borderColor="haccs.coral"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="haccs.coral"
                  _hover={{ bg: "haccs.coral", color: "white" }}
                  transition="all 0.3s"
                >
                  <Instagram size={22} />
                </Box>
              </ChakraLink>
              <ChakraLink href="https://www.linkedin.com/in/njit-haccs/" target="_blank">
                <Box
                  w="50px"
                  h="50px"
                  borderRadius="full"
                  border="2px solid"
                  borderColor="haccs.coral"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="haccs.coral"
                  _hover={{ bg: "haccs.coral", color: "white" }}
                  transition="all 0.3s"
                >
                  <Linkedin size={22} />
                </Box>
              </ChakraLink>
            </HStack>
          </VStack>

          {/* Right Side - Form */}
          <Box
            as="form"
            name={NETLIFY_FORM_NAME}
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            bg="haccs.navyLight"
            borderRadius="xl"
            p={8}
            border="1px solid"
            borderColor="whiteAlpha.100"
          >
            <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />
            <input type="hidden" name="bot-field" />
            <VStack gap={6}>
              <Box w="full">
                <Text fontFamily="heading" fontSize="sm" color="haccs.cream" mb={2}>
                  YOUR NAME
                </Text>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="   Enter your name"
                  bg="haccs.navy"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  color="haccs.cream"
                  _placeholder={{ color: "whiteAlpha.400" }}
                  _focus={{ borderColor: "haccs.coral", boxShadow: "none" }}
                />
              </Box>

              <Box w="full">
                <Text fontFamily="heading" fontSize="sm" color="haccs.cream" mb={2}>
                  EMAIL
                </Text>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="   Enter your email"
                  bg="haccs.navy"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  color="haccs.cream"
                  _placeholder={{ color: "whiteAlpha.400" }}
                  _focus={{ borderColor: "haccs.coral", boxShadow: "none" }}
                />
              </Box>

              <Box w="full">
                <Text fontFamily="heading" fontSize="sm" color="haccs.cream" mb={2}>
                  SUBJECT
                </Text>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="   Subject"
                  bg="haccs.navy"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  color="haccs.cream"
                  _placeholder={{ color: "whiteAlpha.400" }}
                  _focus={{ borderColor: "haccs.coral", boxShadow: "none" }}
                />
              </Box>

              <Box w="full">
                <Text fontFamily="heading" fontSize="sm" color="haccs.cream" mb={2}>
                  MESSAGE
                </Text>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="   Your message..."
                  rows={5}
                  bg="haccs.navy"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  color="haccs.cream"
                  _placeholder={{ color: "whiteAlpha.400" }}
                  _focus={{ borderColor: "haccs.coral", boxShadow: "none" }}
                />
              </Box>

              <Button
                type="submit"
                w="full"
                bg="haccs.coral"
                color="white"
                fontFamily="heading"
                fontWeight={600}
                py={6}
                isLoading={isSubmitting}
                loadingText="SENDING..."
                _hover={{ bg: "haccs.coralLight" }}
                transition="all 0.3s"
              >
                SEND MESSAGE
              </Button>
              {submitState && (
                <Alert
                  status={submitState.type}
                  borderRadius="md"
                  bg={submitState.type === "success" ? "green.900" : "red.900"}
                  color="white"
                >
                  <Box mr={2} display="flex" alignItems="center">
                    {submitState.type === "success" ? <CircleCheck size={18} /> : <CircleAlert size={18} />}
                  </Box>
                  {submitState.message}
                </Alert>
              )}
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default React.memo(Contact);
