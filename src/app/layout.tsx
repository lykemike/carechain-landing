import Navbar from "@/components/navbar";
import "./globals.css";
import { LightRays } from "@/components/ui/light-rays";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark">
        <LightRays />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
