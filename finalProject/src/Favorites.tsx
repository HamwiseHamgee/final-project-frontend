import React, { useContext } from "react";
import { FavoriteContext } from "./FavoritesContext";
import ResultContent from "./Results";

function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoriteContext);

  return (
    <div className="favoritesContainer">
      <h2>FAVORITES</h2>
      <div className="tileContainer">
        <ul>
          {favorites.map((favorites) => {
            return (
              <div className="favoritesContainer">
                <li><img src={favorites.image}></img></li>
                <li>{favorites.title}</li>
                {/* <ul className="favoritesExtendedIngredientsList">
                  {favorites.extendedIngredients.map((ingredient: any) => {
                    return (
                      <li className="extendedIngredientsItem">
                        {ingredient.originalName},{" "}
                        {ingredient.measures.us.amount}{" "}
                        {ingredient.measures.us.unitLong}{" "}
                      </li>
                    );
                  })}
                </ul> */}
              </div>
            );
          })}
        </ul>

        {/* <button onClick={remove}></button> */}
      </div>
    </div>
  );
}

export default Favorites;
