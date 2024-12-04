import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from 'react';
import {IProduct} from '../types/types';

interface ICartContext {
  selectedItems: IProduct[];
  setSelectedItems: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

const CartContext = createContext<ICartContext | undefined>(undefined);

export const useCartContext = (): ICartContext => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartModeProvider');
  }
  return context;
};

export const CartProvider = ({children}: {children: ReactNode}) => {
  const [selectedItems, setSelectedItems] = useState<IProduct[]>([]);

  const value = useMemo(
    () => ({
      selectedItems,
      setSelectedItems,
    }),
    [selectedItems],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
