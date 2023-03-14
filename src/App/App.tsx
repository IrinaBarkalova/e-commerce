import { createContext, useContext } from 'react';

import Product from '@App/pages/Product';
import Products from '@App/pages/Products/Products';
import Header from '@components/Header';
import ProductsListStore from '@store/ProductsListStore';
import ProductStore from '@store/ProductStore';
import { useLocalStore } from '@utils/useLocalStore';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

interface ContextType {
  productsStore: ProductsListStore;
  oneProductStore: ProductStore;
}
const ReposContext = createContext({} as ContextType);
export const useReposContext = () => useContext(ReposContext);

const Provider = ReposContext.Provider;

const App = () => {
  const productsStore = useLocalStore(() => new ProductsListStore());
  const oneProductStore = useLocalStore(() => new ProductStore());
  return (
    <Provider
      value={{
        productsStore,
        oneProductStore,
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product">
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
