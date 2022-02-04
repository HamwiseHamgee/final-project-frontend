import { createContext, ReactNode, useEffect, useState } from "react";
import { Result } from "./Results";

// const defaultFavorite: Result = {
//     id: 0,
//     index: 0,
//     title: '',
//     image: '',
//     missedIngredientCount: 0,
//     extendedIngredients: [],
//     dishTypes: [],
//     servings: 0,
//     instructions: '',
//     link: '',
//     sourceName: '',
//     rating: 0,
//     sourceUrl: '',
//     favorite: false,
//     hidden: true
//   }

interface FavoriteContextValue {
  favorites: Result[];
  addFavorite: (result: Result) => void;
  removeFavorite: (result: Result) => void;
}

const defaultValue: FavoriteContextValue = {
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
};

interface Props {
  children: ReactNode;
}

export const FavoriteContext = createContext(defaultValue);

export function FavoritesContextProvider({ children }: Props) {
  const [favorites, setFavorites] = useState<Result[]>([]);
    useEffect(() => {
        console.log(favorites);
    }, [favorites])
    const addFavorite = (result: Result) => {
        setFavorites((prevFavorites) => {
            return [...prevFavorites, result];
        });
        
    };

    const removeFavorite = (result: Result) => {
        const i = favorites.indexOf(result);
        setFavorites((prevFavorites) => {
            return [...prevFavorites.slice(0, i), ...prevFavorites.slice(i + 1)];
        })
    }

//   function ResultList({ searchTerm }: { searchTerm: string }) {
//     const [results, setResults] = useState<Result[]>([]);

//   }

  return (
      <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>{children}</FavoriteContext.Provider>
  )

}
