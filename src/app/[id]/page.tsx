import { ProductDetail } from '@/components';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;

  return <ProductDetail id={resolvedParams.id} />;
}
