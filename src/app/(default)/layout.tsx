import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../globals.css";
import { RootDocument } from "@/components/root-document";

export const metadata: Metadata = {
  title: "WebTemplate",
  description: "A production-minded Next.js starter for lightweight Cloudflare applications.",
};

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
