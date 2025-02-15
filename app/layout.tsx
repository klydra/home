import { Banner } from "@/components/banner";
import { HorizontalMovementProvider } from "@/components/horizontal-movement";
import "./globals.css";

export const SCALE_CH_PX = 16;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-command antialiased flex flex-col h-screen">
        <header>
          <Banner />
        </header>
        <main className="m-2 mt-0 border-2 border-primary flex-grow">
          {children}
        </main>
        <HorizontalMovementProvider />
      </body>
    </html>
  );
}
