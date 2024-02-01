import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from 'zustand/middleware';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (data: Product) => void;
  increaseItemQuantity: (id: string) => void;
  descreaseItemQuantity: (id: string) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(
          (item) => item.product.id === data.id,
        );

        if (existingItemIndex !== -1) {
          currentItems[existingItemIndex].quantity += 1;
          set({ items: currentItems });
          toast('Item quantity updated in cart.');
        } else {
          set({ items: [...currentItems, { product: data, quantity: 1 }] });
          toast.success('Item added to cart.');
        }
      },
      increaseItemQuantity: (id: string) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(
          (item) => item.product.id === id,
        );

        if (existingItemIndex !== -1) {
          currentItems[existingItemIndex].quantity += 1;
          set({ items: currentItems });
        }
      },
      descreaseItemQuantity: (id: string) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(
          (item) => item.product.id === id,
        );

        if (existingItemIndex !== -1) {
          currentItems[existingItemIndex].quantity -= 1;
          set({ items: currentItems });
        }
      },
      removeItem: (id: string) => {
        const currentItems = get().items;
        const updatedItems = currentItems.filter(
          (item) => item.product.id !== id,
        );
        set({ items: updatedItems });
        toast.success('Item removed from cart.');
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCart;
