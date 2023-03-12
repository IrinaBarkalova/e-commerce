import React from 'react';

import { useReposContext } from '@App/App';
import { Card } from '@components/Card/Card';
import { Input } from '@components/Input/Input';
import { Loader } from '@components/Loader/Loader';
import { MultiDropdown, Option } from '@components/MultiDropdown/MultiDropdown';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import styles from './products.module.scss';

const cites = [
  { key: 'msk', value: 'Москва' },
  { key: 'spb', value: 'Санкт-Петербург' },
  { key: 'ekb', value: 'Екатеринбург' },
  { key: 'yrl', value: 'Ярославль' },
  { key: 'kzn', value: 'Казань' },
];
const Products = () => {
  const navigate = useNavigate();
  const repoContext = useReposContext();

  React.useEffect(() => {
    repoContext.productsStore.getTotal().then();
    repoContext.productsStore.getProductsList({ limit: 12, offset: 0 }).then();
  }, [repoContext]);

  return (
    <div className={styles.products}>
      <h1 className={styles.products}>Products</h1>
      <p className={styles.products}>
        We display products based on the latest products we have, if you want
        <br /> to see our old products please enter the name of the item
      </p>
      <div className={styles.products_row}>
        <Input
          value={'Search property'}
          onChange={() => {}}
          buttonText={'Find Now'}
        />
        <MultiDropdown
          options={cites}
          value={[{ key: 'msk', value: 'Москва' }]}
          onChange={() => {}}
          pluralizeOptions={(values: Option[]) =>
            values.length === 0 ? 'Filter' : `Выбрано: ${values.length}`
          }
        />
      </div>
      <h2 className={styles.products}>
        Total Product
        {repoContext.productsStore.meta === 'loading' && <Loader />}
        {repoContext.productsStore.meta === 'success' && (
          <div className={styles.products_total}>
            {repoContext.productsStore.total}
          </div>
        )}
      </h2>
      <div className={styles.products_card}>
        {repoContext.productsStore.products.map((product) => (
          <Card
            image={product.images[0]}
            title={product.title}
            subtitle={product.description}
            content={product.price}
            onClick={() => navigate(`/product/${product.id}`)}
          />
        ))}
      </div>
    </div>
  );
};
export default observer(Products);
