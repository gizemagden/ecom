import Logo from './Logo';
import Search from './Search';
import NavigationItems from './NavigationItems';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Logo />
      <Search />
      <NavigationItems />
    </div>
  );
}
export default Navbar;
