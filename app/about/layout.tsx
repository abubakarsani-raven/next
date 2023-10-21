import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Page",
  description: "About",
};
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About Nav</nav>
      <section>
        <main>{children}</main>
      </section>
    </>
  );
}
