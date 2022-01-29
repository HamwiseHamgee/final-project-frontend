import { useState, useEffect } from "react";
import axios from "axios";
import './Results.css'

interface Result {
  id: number;
  index: number;
  title: string;
  image: string;
  missedIngredientCount: number;
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

// extended ingredients interface ?

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
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "bac5b9dc17msh2d4a352662dd6a7p190c49jsn86be79361b22",
      },
    };

    axios
      .get(
        "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
        options
      )
      .then(function (response: any) {
        console.log(response.data);
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
    <div>
      <h2>Results for {searchTerm}</h2>
      {results.map((result, index) => {
        result.index=index
        return <ResultItem key={result.id} result={result} ></ResultItem>;
      })}
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
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "bac5b9dc17msh2d4a352662dd6a7p190c49jsn86be79361b22",
      },
    };

    axios
      .get(
        `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${result.id}/information`,
        options
      )
      .then(function (response: any) {
        console.log(response.data);
        // sorting logic here

        const cocktails = response.data as Result;

        // setResults(cocktails.filter( cocktail  => cocktail.missedIngredientCount === 0))
        setFullResults(cocktails);
      })
      .catch(function (error: any) {
        console.error(error);
      });
  }, [result]);

// function assignResultIndex() {
//   for (let i = 0; i < 4; i++) {
//     a[i] = new Array(4)
//   }
// }

function flipTile() {
  let resultTile = document!.getElementById(`resultTile${result.id}`)
  resultTile!.classList.toggle('flip-tile')
}

function resultContent() {
  return (
    <div onClick={flipTile} id={`resultTile${result.id}`} className="resultContainer">
      <div key={result.id} className='resultsContent'>
        <img className='resultImage' src={result.image}></img>
          <p className="resultTitle">{result.title} {result.index}</p>
          {result.missedIngredientCount === 1 && (
            <p className='missingIngredientLabel'>You are missing 1 ingredient</p>
          )}
          {result.missedIngredientCount > 1 && (
          <p className='missingIngredientLabel'>You are missing {result.missedIngredientCount} ingredients</p>
          )}
          {/* {hidden === true && ( */}
      </div>
      <div className="moreDetailsContainer">
            {/* removed onClick={toggleHidden} above*/}
        {fullResults.extendedIngredients.map((ingredient: any) => {
          return <p className='extendedIngredientPart'>{ingredient.originalString}</p>;
        })}
        <p className='instructions'> {fullResults.instructions} </p>
        <a className='recipeLink' href={fullResults.sourceUrl}>
        {" "}
        Original recipe at {fullResults.sourceName}{" "}
        </a>
        <p className='rating'> {fullResults.rating} </p>
        {/* might be image instead */}
        <p className='favorite'> {fullResults.favorite} </p>
        {/* might be image instead */}
      </div>
        {/* )} */}
    </div>
  );
}

  const hasDishType = fullResults.dishTypes?.some((ingredient) => {
    console.log(ingredient);
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
    console.log(ingredient);
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

  // console.log(fullResults);

  if (hasAlcohol) {
    return (
    <div className='row'>
      <div className='firstColumn'>
        {((result.index) % 3 == 0) &&
        resultContent()}
      </div>
      <div className='secondColumn'>
        {((result.index) % 3 == 1) &&
        resultContent()}
      </div>
      <div className='thirdColumn'>
        {((result.index) % 3 == 2) &&
        resultContent()}
      </div>
    </div>
    );
  } else if (hasDishType) {
    return (
    <div className='row'>
      <div className='firstColumn'>
        {((result.index) % 3 == 0) &&
        resultContent()}
      </div>
      <div className='secondColumn'>
        {((result.index) % 3 == 1) &&
        resultContent()}
      </div>
      <div className='thirdColumn'>
        {((result.index) % 3 == 2) &&
        resultContent()}
      </div>
    </div>
    );
  } else {
    return null;
  }
}




// <ul className='ingredientsList'>
//   {
//     ingredients.map((ingredient, i) =>
//     <li key={i}>
//     {ingredient}
//     <img  key={i} src={removeIcon} alt='remove button'
//     onClick={() => {handleDeleteIngredient(i)}}></img>
//     </li>)
// }

export default ResultItem;
