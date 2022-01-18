import React, { useMemo } from 'react';
import { useEcom } from '../context/context';
import { addProductToFavorites } from '../context/ActionCreators';
import { useLocation, Link } from 'react-router-dom';

const BoxList = () => {
  const { state: { products, favorites }, dispatch } = useEcom();
  const location = useLocation();
  const mode = useMemo(() => location.pathname, [location]);
  const currentProducts = useMemo(() => {
    return mode === '/favorites' ? products.filter(product => favorites.find(fav => fav.id === product.id) !== undefined) : products;
  }, [products, favorites, mode]);

  const addToFav = (product: object) => {
    dispatch(addProductToFavorites(product));
  }

  return (
    <div className='productList'>
      {currentProducts.map(product => (
        <>
          <div className='favorite' onClick={() => { addToFav(product); }} />
          <Link to={`/details/${product.id}`}>
            <div className='productItem' key={product.id}>
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
          </Link>
        </>
      ))}
    </div>
  );
};
export default BoxList;
