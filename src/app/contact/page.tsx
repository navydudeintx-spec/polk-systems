import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Polk Systems",
  description:
    "Schedule a private home assessment or contact Polk Systems about lighting, access control, cameras, and local-first smart home automation.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}