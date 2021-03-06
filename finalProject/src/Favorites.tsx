import React, { useContext } from "react";
import { FavoriteContext } from "./FavoritesContext";
import ResultContent from "./Results";
import './Favorites.css'
import lineAccent from './assets/goldAccentLine.png'


function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoriteContext);

  return (
    <div className="favoritesContainer">
      <h2 className='favoritesHeader'>FAVORITES</h2>
      <img src={lineAccent} className='favoritesLineAccent'></img>
      <div className="favoritesGrid">
          {favorites.map((favorites) => {
            return (
              <div >

                <ResultContent hideMissing={true} key={favorites.id} result={favorites}></ResultContent>


              </div>
            );
          })}
        {/* <button onClick={remove}></button> */}
      </div>
    </div>
  );
}

export default Favorites;
