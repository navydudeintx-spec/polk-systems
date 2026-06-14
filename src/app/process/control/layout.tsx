import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Control | Polk Systems",
  description: "You hold the keys. Literally.",
  alternates: {
    canonical: "/process/control",
  },
};

export default function ControlLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}