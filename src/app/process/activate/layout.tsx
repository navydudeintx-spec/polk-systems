import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Activate | Polk Systems",
  description: "The moment your home wakes up.",
  alternates: {
    canonical: "/process/activate",
  },
};

export default function ActivateLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}