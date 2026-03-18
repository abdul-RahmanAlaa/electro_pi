'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Loading, ErrorMessage } from '@/components';
import { useProduct } from '@/hooks/use-product';
import { Button } from '@/components/ui/button';
import { Card } from './ui/card';

type ProductDetailProps = {
  id: string;
};

export default function ProductDetail({ id }: ProductDetailProps) {
  const { data: product, isLoading, isError } = useProduct(id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (isLoading) {
    return <Loading message="Loading product..." />;
  }

  if (isError || !product) {
    return <ErrorMessage message="Product not found or failed to load." />;
  }

  const mainImage = selectedImage || product.images[0];

  return (
    <div className="grid md:gap-4 p-4 md:grid-cols-2">
      <Card className="bg-neutral-200 p-2 md:rounded-lg rounded-none">
        <Image
          src={mainImage}
          alt={product.title}
          width={900}
          height={550}
          className="rounded-lg object-cover"
        />
        <div className="mt-2 flex gap-2">
          {product.images.map((src) => {
            const active = src === mainImage;
            return (
              <Button
                variant="ghost"
                size="icon-lg"
                key={src}
                type="button"
                onClick={() => setSelectedImage(src)}
                className={`bg-neutral-50 p-1 ${active ? 'border-primary' : 'border-transparent'} `}
              >
                <Image
                  src={src}
                  alt={`${product.title} thumbnail`}
                  width={150}
                  height={100}
                  className="object-cover"
                />
              </Button>
            );
          })}
        </div>
      </Card>

      <Card className="border p-4 md:rounded-lg rounded-none">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-muted-foreground text-sm">{product.category}</p>
        <p className="text-primary text-2xl font-bold">${product.price}</p>
        <p className="text-sm text-gray-700">{product.description}</p>
      </Card>
    </div>
  );
}
