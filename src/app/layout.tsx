import { Providers } from '@/providers';
import { ReactNode } from 'react';
import { Navbar } from '@/components';
import './globals.css';
import { Sheet } from '@/components/ui/sheet';

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
          </Sheet>
        </Providers>
      </body>
    </html>
  );
}
