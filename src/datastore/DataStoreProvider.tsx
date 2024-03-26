import React, { createContext, useContext, useEffect, useState } from 'react';
import { ProductType } from '../features/models/Product';
import { fetchProducts } from '../service/ProductsService';

interface DataStoreContextProps {
  data: ProductType[];
}

const DataStoreContext = createContext<DataStoreContextProps>({ data: [] });

export const useStoreData = () => {
  const dataContext = useContext(DataStoreContext);
  if (!dataContext) {
    throw new Error('No data context found');
  }

  return dataContext;
};

export const DataStoreProvider = ({ children }: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProducts().then(responseJson => setData(responseJson));
  }, []);

  return (
    <DataStoreContext.Provider value={{ data }}>
      {children}
    </DataStoreContext.Provider>
  );
};
