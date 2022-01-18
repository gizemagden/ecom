import { useParams } from "react-router-dom";
import { useMemo } from 'react';
import { useEcom } from "../context/context";

const ProductDetails = () => {
  const { state: { products, favorites }, dispatch } = useEcom();
  let params = useParams();
  const product = useMemo(() => !!products.find(product.id === params.productId), [products, params.productId]);
  return (
    <div className='productDetails'>
      <img src={product.src} alt="product" />
    </div>
  );
};
export default ProductDetails;
