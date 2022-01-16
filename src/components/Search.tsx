import { useEcom } from '../context/context';

const Search = () => {
  const ecomState = useEcom();
  return (
    <div className='search'>
        <input type="search" placeholder="Search....." onChange={(e) => console.log(e.target.value)}/>
    </div>
  );
}
export default Search;
