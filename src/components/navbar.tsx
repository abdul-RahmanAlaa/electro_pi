import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Navbar() {
  return (
    <nav className="bg-neutral-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 p-4">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={150} height={150} />
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/products"
            className="rounded-full bg-neutral-100 p-3 hover:bg-neutral-300"
          >
            <ShoppingCart className="size-6" />
          </Link>

          <Link
            href="/login"
            className="rounded-full bg-neutral-100 p-2 hover:bg-neutral-300"
          >
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />

              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </nav>
  );
}
