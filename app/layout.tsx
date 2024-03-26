import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Farkhan Azmi",
  description:
    "Talented software engineer. who always try to challenge and learn some new experiences, knowledge, skills. Have the ability to work alone or collaborate with a team.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>
          <div data-theme="cupcake">{children}</div>
        </Suspense>
      </body>
    </html>
  );
}
