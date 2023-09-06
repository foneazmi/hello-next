import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Hello Next",
  description: "Just hello",
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
          <ThemeProvider>{children}</ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
