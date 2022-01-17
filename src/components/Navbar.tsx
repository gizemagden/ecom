import Logo from './Logo';
import Search from './Search';
import NavigationItems from './NavigationItems';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/"><Logo /></Link>
      <Search />
      <NavigationItems />
    </div>
  );
}
export default Navbar;
