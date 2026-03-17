// 'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { IProduct } from '@/types/product';

interface ProductCardProps {
  product: IProduct;
  onAddToCart?: () => void;
}

export default function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  const { _id, title, image, price } = product;

  return (
    <Card className="pt-0">
      <Link href={`/${_id}`}>
        <Image
          className="mb-2 block h-60 w-full object-cover"
          src={image}
          alt={title}
          width={192}
          height={192}
        />

        <CardContent>
          <CardTitle className="truncate">{title}</CardTitle>

          <CardDescription>${price.toFixed(2)}</CardDescription>
        </CardContent>
      </Link>

      <CardFooter className="mt-auto p-2">
        <Button
          size="lg"
          variant="default"
          className="w-full"
          onClick={() => {
            onAddToCart?.();
          }}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
