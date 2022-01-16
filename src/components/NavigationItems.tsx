import { useEcom } from '../context/context';
import Favorites from './Favorites';
import { ReactComponent as Basket } from '../assets/basket.svg';
import { ReactComponent as Account } from '../assets/account.svg';


const NavigationItems = () => {
  const ecomState = useEcom();
  return (
    <div className='navigationItems'>
      <Favorites />
      <Basket />
      <div className='account'>
        <Account />
      </div>
    </div>
  );
};
export default NavigationItems;
