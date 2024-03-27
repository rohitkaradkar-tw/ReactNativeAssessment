import React, { createContext, useContext, useEffect, useState } from 'react';
import { ProductType } from '../features/models/Product';
import { fetchProducts } from '../service/APIService';

interface DataStoreContextProps {
  data: ProductType[];
  toggleWishStatus: (selectedId: number) => void;
  getWishList: () => ProductType[];
}

const noOp = () => {};

const DataStoreContext = createContext<DataStoreContextProps>({
  data: [],
  toggleWishStatus: noOp,
  getWishList: () => []
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

  // Wishlist related operations
  const getWishList = () => data.filter(product => wishlistIDs.has(product.id));
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

  useEffect(() => {
    fetchProducts().then(responseJson => setData(responseJson));
  }, []);

  return (
    <DataStoreContext.Provider value={{ data, toggleWishStatus, getWishList }}>
      {children}
    </DataStoreContext.Provider>
  );
};
