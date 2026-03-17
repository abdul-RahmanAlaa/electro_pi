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
          <div className="mx-auto flex max-w-7xl gap-4 p-4 min-h-[calc(100vh-8.5rem)]">
            <aside className=" w-96">asd</aside>

            <main>{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
