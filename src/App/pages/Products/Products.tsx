import { useNavigate } from 'react-router-dom';

import styles from './products.module.scss';
const Products = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.products}>
      ПродуктЫЫЫ
      <button onClick={() => navigate(`/product/1`)}>product</button>
    </div>
  );
};
export default Products;
