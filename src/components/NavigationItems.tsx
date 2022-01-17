import { Link } from 'react-router-dom';

import Favorites from './Favorites';
import { ReactComponent as Basket } from '../assets/basket.svg';
import { ReactComponent as Account } from '../assets/account.svg';

const NavigationItems = () => {
  return (
    <div className='navigationItems'>
      <Link to="/favorites"><Favorites /></Link>
      <Link to="/basket"><Basket /></Link>
      <div className='account'>
        <Account />
      </div>
    </div>
  );
};
export default NavigationItems;
