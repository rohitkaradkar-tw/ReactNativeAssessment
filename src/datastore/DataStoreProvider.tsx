import React, { createContext, useContext, useEffect, useState } from 'react';
import { ProductType } from '../features/models/Product';
import { fetchProducts } from '../service/APIService';
import { getUserName, setUserName } from '../service/store';

interface DataStoreContextProps {
  data: ProductType[];
  userName: string | null;
  updateUserName: (user: string) => void;
  toggleWishStatus: (selectedId: number) => void;
  getWishList: () => ProductType[];
  isWishlisted: (selectedId: number) => boolean;
  toggleCartItems: (selectedId: number) => void;
  getCartList: () => ProductType[];
  isInCart: (selectedId: number) => boolean;
  clearCart: () => void;
  getBill: () => number;
}

const noOp = () => {};

const DataStoreContext = createContext<DataStoreContextProps>({
  data: [],
  userName: '',
  updateUserName: noOp,
  toggleWishStatus: noOp,
  getWishList: () => [],
  isWishlisted: () => false,
  toggleCartItems: noOp,
  getCartList: () => [],
  isInCart: () => false,
  clearCart: noOp,
  getBill: () => 0
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
  const [user, setUser] = useState<string | null>('');
  const [wishlistIDs, setWishListIDs] = useState<Set<number>>(new Set());
  const [cartListIDs, setCartListIDs] = useState<Set<number>>(new Set());

  const updateUserName = (user: string) => {
    setUserName(user);
    setUser(user);
  };

  // Wishlist related operations
  const isWishlisted = (productID: number) => wishlistIDs.has(productID);
  const getWishList = () => data.filter(product => isWishlisted(product.id));
  const toggleWishStatus = (selectedID: number) => {
    const wishlist = new Set(wishlistIDs.values());

    if (isWishlisted(selectedID)) {
      wishlist.delete(selectedID);
    } else {
      wishlist.add(selectedID);
    }

    setWishListIDs(wishlist);
  };

  //Cart Items related operations
  const getCartList = () => data.filter(product => cartListIDs.has(product.id));
  const isInCart = (productID: number) => cartListIDs.has(productID);
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

  const clearCart = () => {
    setCartListIDs(new Set());
  };

  const getBill = () => {
    const cartList = getCartList();
    const totalBill = cartList.reduce((acc, product) => acc + product.price, 0);
    return totalBill;
  };

  useEffect(() => {
    fetchProducts().then(responseJson => setData(responseJson));
    getUserName().then(responseJson => setUser(responseJson));
  }, [user]);

  return (
    <DataStoreContext.Provider
      value={{
        data,
        userName: user,
        updateUserName,
        toggleWishStatus,
        getWishList,
        isWishlisted,
        toggleCartItems,
        getCartList,
        isInCart,
        clearCart,
        getBill
      }}>
      {children}
    </DataStoreContext.Provider>
  );
};
