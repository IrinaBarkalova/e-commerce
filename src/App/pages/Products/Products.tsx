import React from 'react';

import { useReposContext } from '@App/App';
import { Loader } from '@components/Loader/Loader';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import styles from './products.module.scss';

const Products = () => {
  const navigate = useNavigate();
  const repoContext = useReposContext();

  React.useEffect(() => {
    repoContext.productsStore.getProductsList({ limit: 1, offset: 0 }).then();
  }, [repoContext]);

  return (
    <div className={styles.products}>
      ПродуктЫЫЫ
      {repoContext.productsStore.meta === 'loading' && <Loader />}
      {repoContext.productsStore.products.map((p) => (
        <div>
          {p.title}
          {p.id}
        </div>
      ))}
      <button onClick={() => navigate(`/product/1`)}>product</button>
    </div>
  );
};
export default observer(Products);
