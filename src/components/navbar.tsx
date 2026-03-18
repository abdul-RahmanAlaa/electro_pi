import { TextAlignJustify } from 'lucide-react';
import { SheetTrigger } from '@/components/ui/sheet';
import { MobileSheet, AccountButton } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className="bg-neutral-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 p-4">
          <div className="flex items-center gap-4">
            <SheetTrigger className='md:hidden'>
              <TextAlignJustify />
            </SheetTrigger>

            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={150} height={150} />
            </Link>
          </div>

          <AccountButton />
        </div>
      </nav>

      <MobileSheet />
    </>
  );
}
