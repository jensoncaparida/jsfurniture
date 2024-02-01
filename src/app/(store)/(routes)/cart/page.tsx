'use client';

import useCart from '@/hooks/useCart';

import { Container } from '@/components/ui/container';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CartItem } from './components/cartItem';
import { EmptyCart } from './components/emptyCart';
import { Summary } from './components/summary';

export default function CartPage() {
  const cart = useCart();
  return (
    <main>
      <Container>
        {cart.items.length > 0 ? (
          <div className="space-y-8 py-16">
            <h1
              className="text-2xl font-medium"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
              }}
            >
              Your cart
            </h1>
            <Table>
              <TableHeader>
                <TableRow className="text-xs hover:bg-white">
                  <TableHead>PRODUCT</TableHead>
                  <TableHead className="hidden lg:block">QUANTITY</TableHead>
                  <TableHead>SUBTOTAL</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cart.items.map((item) => (
                  <CartItem
                    key={item.product.id}
                    data={item.product}
                    quantity={item.quantity}
                  />
                ))}
              </TableBody>
            </Table>
            <Summary />
          </div>
        ) : (
          <EmptyCart />
        )}
      </Container>
    </main>
  );
}
