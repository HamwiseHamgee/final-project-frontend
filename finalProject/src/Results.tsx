import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
} from "react";
import axios from "axios";
import "./Results.css";
import { FavoriteContext } from "./FavoritesContext";
import "./Results.css";
import lineAccent from "./assets/goldAccentLine.png";

export interface Result {
  id: number;
  index: number;
  title: string;
  image: string;
  missedIngredientCount: number;
  missedIngredients: any[];
  extendedIngredients: any[];
  dishTypes: any[];
  servings: number;
  instructions: string;
  link: string;
  sourceName: string;
  rating: number;
  sourceUrl: string;
  favorite: boolean;
  hidden: boolean;
}

export function ResultList({ searchTerm }: { searchTerm: string }) {
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const options = {
      params: {
        ingredients: searchTerm,
        number: "30",
        ignorePantry: false,
        ranking: "2",
      },
      headers: {
        // "x-rapidapi-host":
        //   "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        // "x-rapidapi-key": "bac5b9dc17msh2d4a352662dd6a7p190c49jsn86be79361b22",
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "3a1e317334mshf91b4c298e5221ep1ff786jsn4a007427aeeb",
      },
    };

    axios
      .get(
        "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
        options
      )
      .then(function (response: any) {
        console.log("First Response ResultList");
        // sorting logic here

        const cocktails = response.data as Result[];

        setResults(
          cocktails.filter(
            (cocktail) =>
              cocktail.missedIngredientCount <= 5 && cocktail.id != 506555
          )
        );
        // setResults(cocktails)
      })
      .catch(function (error: any) {
        console.error(error);
      });
  }, [searchTerm]);
  return (
    <div className="gridContainer">
      <h1 className="resultsHeader">Cocktails</h1>
      <img className="resultsLineAccent" src={lineAccent}></img>

      {/* <h2>Results for {searchTerm}</h2> */}
      <div className="grid">
        {results.map((result, index) => {
          result.index = index;
          return <ResultItem key={result.id} result={result}></ResultItem>;
        })}
      </div>
    </div>
  );
}

export function ResultItem({ result }: { result: Result }) {
  const [hidden, setHidden] = useState(false);

  function toggleHidden() {
    setHidden(!hidden);
  }

  const [fullResults, setFullResults] = useState<Result>(result);

  useEffect(() => {
    const options = {
      headers: {
        // "x-rapidapi-host":
        //   "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        // "x-rapidapi-key": "bac5b9dc17msh2d4a352662dd6a7p190c49jsn86be79361b22",
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "3a1e317334mshf91b4c298e5221ep1ff786jsn4a007427aeeb",
      },
    };

    axios
      .get(
        `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${result.id}/information`,
        options
      )
      .then(function (response: any) {
        // sorting logic here

        const cocktails = response.data as Result;

        // setResults(cocktails.filter( cocktail  => cocktail.missedIngredientCount === 0))
        setFullResults(cocktails);
      })
      .catch(function (error: any) {
        console.error(error);
      });
  }, [result]);

  function flipTile() {
    let resultTile = document!.getElementById(`resultTile${result.id}`);
    resultTile!.classList.toggle("flip-tile");
  }

  function ResultContent() {
    const { addFavorite, removeFavorite } = useContext(FavoriteContext);

    return (
      <div
        onClick={flipTile}
        id={`resultTile${result.id}`}
        className="resultContainer"
      >
        <div key={result.id} className="resultsContent">
          <img className="resultImage" src={result.image}></img>
          <p className="resultTitle">{result.title}</p>
          {result.missedIngredientCount === 1 &&
            result.missedIngredients.map((missedIngredient: any) => {
              return (
                <p className="missingIngredientLabel">
                  You are missing: {missedIngredient.originalName}
                </p>
              );
            })}
          {result.missedIngredientCount > 1 && (
            <p className="missingIngredientLabel">
              You are missing {result.missedIngredientCount} ingredients
            </p>
          )}
        </div>
        
        <div className="moreDetailsContainer">
          <img className="resultBackImage" src={result.image}></img>
          <h2 className='listTitle'>Ingredients:</h2>
          <ul className="extendedIngredientsList">
            {/* Ingredients list not showing */}
            {fullResults.extendedIngredients.map((ingredient: any) => {
              return (
                <li className="extendedIngredientsItem">
                  {ingredient.originalName}, {ingredient.measures.us.amount}{" "}
                  {ingredient.measures.us.unitLong}{" "}
                </li>
              );
            })}
          </ul>
          <br></br>
          <h2 className='instructionsTitle'>Instructions:</h2>
          <p className="instructions"> {fullResults.instructions} </p>
          <br></br>
          <a
            target="_blank"
            className="recipeLink"
            href={fullResults.sourceUrl}
          >
            {" "}
            Original recipe at {fullResults.sourceName}{" "}
          </a>
          <p className="rating"> {fullResults.rating} </p>
          {/* might be image instead */}
          {/* set favorite = true w/ addFavorite
        show unfavorite button if favorite = true and vice versa*/}
        <br></br>
          <button
            className="favoriteButton"
            id="favoriteButton"
            onClick={() => addFavorite(result)}
          >
            <div id="underline"></div>
            <p>Favorite</p>
          </button>

          <button
            className="favoriteButton"
            id="deleteFavoriteButton"
            onClick={() => removeFavorite(result)}
          >
            <div id="underline"></div>
            <p>Delete Favorite</p>
          </button>
        </div>
      </div>
    );
  }

  // function FavoriteContent() {
  //   const {favorites, addFavorite} = useContext(FavoriteContext);

  //   return (
  //     <div onClick={flipTile} id={`resultTile${result.id}`} className="resultContainer">
  //       <div key={result.id} className='resultsContent'>
  //         <img className='resultImage' src={result.image}></img>
  //           <p className="resultTitle">{result.title}</p>
  //         </div>
  //       <div className="moreDetailsContainer">
  //         <img className='resultBackImage' src={result.image}></img>
  //         <ul className='extendedIngredientsList'>
  //           {fullResults.extendedIngredients.map((ingredient: any) => {
  //               return(
  //                 <li className='extendedIngredientsItem'>{ingredient.originalName}, {ingredient.measures.us.amount} {ingredient.measures.us.unitLong} </li>
  //               )
  //           })}
  //         </ul>
  //         <p className='instructions'> {fullResults.instructions} </p>
  //         <a target='_blank' className='recipeLink' href={fullResults.sourceUrl}>
  //         {" "}
  //         Original recipe at {fullResults.sourceName}{" "}
  //         </a>
  //         <p className='rating'> {fullResults.rating} </p>
  //         <button className='favoriteButton' id='favoriteButton' onClick={() => addFavorite(result)}>
  //           <div id="underline"></div>
  //           <p>Favorite</p>
  //         </button>
  //       </div>
  //     </div>
  //     );
  //   }

  const hasDishType = fullResults.dishTypes?.some((ingredient) => {
    const allowedDishTypes = [
      "Alcoholic Beverages",
      "Alcohol",
      "Beverage",
      "beverage",
      "Beverages",
      "beverages",
      "Liquor",
      "liquor",
      "alcoholic beverages",
      "alcohol",
      "Party",
      "party",
      "drink",
      "Drink",
    ];
    return allowedDishTypes.includes(ingredient.dishTypes);
  });

  const hasAlcohol = fullResults.extendedIngredients?.some((ingredient) => {
    const allowedIngredients = [
      "Alcoholic Beverages",
      "Alcohol",
      "Beverage",
      "beverage",
      "Beverages",
      "beverages",
      "Liquor",
      "liquor",
      "alcoholic beverages",
      "alcohol",
      "Party",
      "party",
      "drink",
      "Drink",
    ];
    return allowedIngredients.includes(ingredient.aisle);
  });

  function returnGridItem() {
    if (hasAlcohol || hasDishType) {
      return ResultContent();
    } else {
      return null;
    }
  }

  return <>{returnGridItem()}</>;
}

export default ResultItem;
