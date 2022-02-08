import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Result } from "./Results";
import { useContext } from "react";
import AuthContext from "./AuthContext";

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
  const { user } = useContext(AuthContext);

  const [favorites, setFavorites] = useState<Result[]>([]);
  useEffect(() => {
    if (user) {
        axios.get<Result[]>(
          `https://us-central1-final-project-eugene-sam.cloudfunctions.net/api/favorites/${user.uid}`
        ).then((res) => {setFavorites(res.data)})
      }
  }, [user]);
  
  const addFavorite = (result: Result) => {
    setFavorites((prevFavorites) => {
      return [...prevFavorites, result];
    });
    
    if (user) {
      axios.post(
        `https://us-central1-final-project-eugene-sam.cloudfunctions.net/api/favorites/${user.uid}`, {...result}
      );
    }
  };

  const removeFavorite = (result: Result) => {
    const i = favorites.indexOf(result);
    setFavorites((prevFavorites) => {
      return [...prevFavorites.slice(0, i), ...prevFavorites.slice(i + 1)];
    });

    if (user) {
        axios.delete(
          `https://us-central1-final-project-eugene-sam.cloudfunctions.net/api/favorites/${user.uid}/${result.id}`, 
        );
      }
  };

  //   function ResultList({ searchTerm }: { searchTerm: string }) {
  //     const [results, setResults] = useState<Result[]>([]);

  //   }

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
