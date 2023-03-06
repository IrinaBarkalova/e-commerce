import { createContext, useContext } from 'react';

import Product from '@App/pages/Product';
import Products from '@App/pages/Products/Products';
import Header from '@components/Header';
import ProductsListStore from '@store/ProductsListStore';
import { useLocalStore } from 'mobx-react-lite';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

interface ContextType {
  productsStore: ProductsListStore;
}
const ReposContext = createContext({} as ContextType);
export const useReposContext = () => useContext(ReposContext);

const Provider = ReposContext.Provider;

const App = () => {
  const productsStore = useLocalStore(() => new ProductsListStore());
  return (
    <Provider
      value={{
        productsStore,
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
