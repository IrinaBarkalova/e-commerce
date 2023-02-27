import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  return (
    <div>
      ПродуктЫЫЫ
      <button onClick={() => navigate(`/product/1`)}>product</button>
    </div>
  );
};
export default Products;
