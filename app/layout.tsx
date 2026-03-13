import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ambay Capital – Insurance, Investments & Wealth Planning",
  description:
    "Expert insurance, mutual fund, and wealth planning services for every stage of life. Book a free consultation today.",
  keywords:
    "insurance advisor, mutual fund advisor, health insurance India, tax saving investments, retirement planning, SIP investment",
  openGraph: {
    title: "Ambay Capital – Insurance, Investments & Wealth Planning",
    description:
      "Your complete financial partner for every stage of life. Insurance, Investments, Retirement Planning & Wealth Advisory.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
