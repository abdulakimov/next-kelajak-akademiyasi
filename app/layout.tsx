import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider";


const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Kelajak Akademiyasi",
  description: "Kelajak akademiyasining rasmiy web-sayti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
