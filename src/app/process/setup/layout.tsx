import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Setup | Polk Systems",
  description: "We don't just plug it in. We forge it.",
  alternates: {
    canonical: "/process/setup",
  },
};

export default function SetupLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}