import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata = {
  title: "Farkhan Azmi",
  description:
    "Talented software engineer. who always try to challenge and learn some new experiences, knowledge, skills. Have the ability to work alone or collaborate with a team.",
  keywords: [
    "Farkhan Azmi",
    "Software Engineer",
    "Web Developer",
    "Full Stack",
    "Portfolio",
    "React",
    "Next.js",
    "Mobile Developer",
    "Flutter",
    "Backend Developer",
  ],
  authors: [{ name: "Farkhan Azmi", url: "https://khan.my.id" }],
  creator: "Farkhan Azmi",
  openGraph: {
    title: "Farkhan Azmi",
    description:
      "Talented software engineer. who always try to challenge and learn some new experiences, knowledge, skills.",
    url: "https://khan.my.id",
    siteName: "Farkhan Azmi Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/26783512?s=400&u=aa3ad6e7b41ab5accbb6602d729e8b07abe740e2&v=4",
        width: 1200,
        height: 630,
        alt: "Farkhan Azmi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farkhan Azmi",
    description:
      "Talented software engineer. who always try to challenge and learn some new experiences, knowledge, skills.",
    images: [
      "https://avatars.githubusercontent.com/u/26783512?s=400&u=aa3ad6e7b41ab5accbb6602d729e8b07abe740e2&v=4",
    ],
    creator: "@farkhanazmi",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SpeedInsights />
        <Suspense fallback={<Loading />}>
          <div data-theme="winter">{children}</div>
        </Suspense>
      </body>
    </html>
  );
}
