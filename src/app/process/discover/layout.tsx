import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Discover | Polk Systems",
  description: "A smart home shouldn't be guessed. It should be measured.",
  alternates: {
    canonical: "/process/discover",
  },
};

export default function DiscoverLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}