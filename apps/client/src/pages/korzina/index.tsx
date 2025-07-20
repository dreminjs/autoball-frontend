import dynamic from 'next/dynamic';

const CartPage = dynamic(
  () => import('@/modules/cart/ui/cart-page/cart-page').then((mod) => mod.CartPage),
  { ssr: false }
);

export default function Index() {
  return <CartPage />;
}
