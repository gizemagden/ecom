import { useEcom } from '../context/context';
import { addProductToFavorites } from '../context/ActionCreators';

const BoxList = () => {
  const { state, dispatch } = useEcom();
  const handleClick = (product: object) => {
    // add to favs for now
    dispatch(addProductToFavorites(product));
  }
  return (
    <div className='productList'>
      {state.products.map(product => (
        <div className='productItem' key={product.id} onClick={() => { handleClick(product); }}>
          <img src={product.src} alt="product" />
          <div className='details'>
            <div className='name'>
              {product.name}
            </div>
            <div className='brand'>
              <b>
                {product.brand}
              </b>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BoxList;
