import { useParams } from "react-router-dom";
import { useMemo } from 'react';
import { useEcom } from "../context/context";

const ProductDetails = () => {
  const { state: { products, favorites }, dispatch } = useEcom();
  let params = useParams();
  const product = useMemo(() => products.find(p => p.id === params.productId), [products, params.productId]);
  console.log(product);
  const onError = (e) => {
    console.log(product.src);
  }
  const source = product.src;
  const second = source.substring(0, source.length - 4) + '-2' + source.slice(-4);
  const third = source.substring(0, source.length - 4) + '-3' + source.slice(-4);
  console.log(source.substring(0, source.length - 4), source.slice(-4));

  return (
    <div className='productDetails'>
      <div className='productDetails-item sideImages'>
        <img src={`http://${window.location.host}${product.src.substring(1)}`} alt="product" />
        <img src={second} alt="product" />
        <img src={`http://${window.location.host}${product.src.substring(1)}-3`} alt="product" />
      </div>
      <div className='productDetails-item mainImage'>
        <img src={`http://${window.location.host}${product.src.substring(1)}`} onError={onError} alt="product" />
      </div>
      <div className="productDetails-item rightSide">
        <div className='productInfo'>
          <div className='productInfo-left'>
            <div className='productInfo-brand'>
              <b>{product.brand}</b>
            </div>
            <div className='productInfo-name'>
              {product.name}
            </div>
          </div>
          <div className='productInfo-price'>
            {product.price}
          </div>
        </div>
        <div className='colorSelection'>
          <p><b>Color</b></p>
          {product.color}
        </div>
        <div className='sizeSelection'>
          <p><b>Size</b></p>
          {product.size}
        </div>
        <div className='addToCart'>
          <button className="addTocartButton">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
