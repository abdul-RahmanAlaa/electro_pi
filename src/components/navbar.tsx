import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SearchBar } from '@/components';

export default function Navbar() {
  return (
    <nav className="bg-neutral-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 p-4">
        <div className="flex w-full max-w-2xl items-center justify-between">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={150} height={150} />
          </Link>

          <SearchBar />
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="flex items-center gap-2 rounded-xl bg-neutral-100 p-2 hover:bg-neutral-300"
          >
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />

              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p className="hidden sm:block">Account</p>
          </Link>

          <Link
            href="/products"
            className="flex items-center gap-2 rounded-xl bg-neutral-100 p-3 hover:bg-neutral-300"
          >
            <ShoppingCart className="size-6" />

            <p className="hidden sm:block">Cart</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
