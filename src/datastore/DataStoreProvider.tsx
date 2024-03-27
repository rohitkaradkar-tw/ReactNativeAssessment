import React, { createContext, useContext, useEffect, useState } from 'react';
import { ProductType } from '../features/models/Product';
import { fetchProducts } from '../service/APIService';

interface DataStoreContextProps {
  data: ProductType[];
  toggleWishStatus: (selectedId: number) => void;
  getWishList: () => ProductType[];
  isWishlisted: (selectedId: number) => boolean;
  toggleCartItems: (selectedId: number) => void;
  getCartList: () => ProductType[];
}

const noOp = () => {};

const DataStoreContext = createContext<DataStoreContextProps>({
  data: [],
  toggleWishStatus: noOp,
  getWishList: () => [],
  isWishlisted: () => false,
  toggleCartItems: noOp,
  getCartList: () => []
});

export const useStoreData = () => {
  const dataContext = useContext(DataStoreContext);
  if (!dataContext) {
    throw new Error('No data context found');
  }

  return dataContext;
};

export const DataStoreProvider = ({ children }: any) => {
  const [data, setData] = useState<ProductType[]>([]);
  const [wishlistIDs, setWishListIDs] = useState<Set<number>>(new Set());
  const [cartListIDs, setCartListIDs] = useState<Set<number>>(new Set());

  // Wishlist related operations
  const getWishList = () => data.filter(product => wishlistIDs.has(product.id));
  const isWishlisted = (productID: number) => wishlistIDs.has(productID);
  const toggleWishStatus = (selectedID: number) => {
    const wishlist = new Set<number>([...wishlistIDs]);

    if (wishlist.has(selectedID)) {
      wishlist.delete(selectedID);
      setWishListIDs(wishlist);
      return;
    }

    wishlist.add(selectedID);
    setWishListIDs(wishlist);
  };

  //Cart Items related operations
  const getCartList = () => data.filter(product => cartListIDs.has(product.id));
  const toggleCartItems = (selectedID: number) => {
    const cart = new Set<number>([...cartListIDs]);

    if (cart.has(selectedID)) {
      cart.delete(selectedID);
      setCartListIDs(cart);
      return;
    }

    cart.add(selectedID);
    setCartListIDs(cart);
  };

  useEffect(() => {
    fetchProducts().then(responseJson => setData(responseJson));
  }, []);

  return (
    <DataStoreContext.Provider
      value={{
        data,
        toggleWishStatus,
        getWishList,
        isWishlisted,
        toggleCartItems,
        getCartList
      }}>
      {children}
    </DataStoreContext.Provider>
  );
};
