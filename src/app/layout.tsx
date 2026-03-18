import { ReactNode } from 'react';
import { Providers } from '@/providers';
import { Navbar } from '@/components';
import { Toaster } from '@/components/ui/sonner';
import { Sheet } from '@/components/ui/sheet';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Sheet>
            <Navbar />
            <main className="mx-auto min-h-[calc(100vh-8.5rem)] max-w-7xl">
              {children}
            </main>
            <Toaster />
          </Sheet>
        </Providers>
      </body>
    </html>
  );
}
