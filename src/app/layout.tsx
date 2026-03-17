import { Providers } from '@/providers';
import { ReactNode } from 'react';
import { Footer, Navbar } from '@/components';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main className="mx-auto min-h-[calc(100vh-8.5rem)] max-w-7xl">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
