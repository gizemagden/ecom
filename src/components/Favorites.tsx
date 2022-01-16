import React from "react";
import { ReactComponent as Favorite } from '../assets/favorite.svg';
import { useEcom } from "../context/context";


const Favorites = () => {
  const { state: { favorites } } = useEcom();
  return (
    <>
      <Favorite />
      <div>
        {favorites.length}
      </div>
    </>
  );
}

export default Favorites;
