import { Banner } from "@/components/banner";
import { HorizontalMovementProvider } from "@/components/horizontal-movement";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>klydra.dev</title>
        <link rel="icon" href="/icon.ico" type="image/x-icon" />
        <meta name="darkreader-lock" />
      </head>
      <body className="font-command antialiased flex flex-col h-screen duration-200">
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
