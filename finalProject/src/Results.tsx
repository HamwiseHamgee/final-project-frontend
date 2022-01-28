import { useState, useEffect } from "react";
import axios from 'axios';

interface Result {
  id: number,
  title: string;
  image: string;
  missedIngredientCount: number,
  ingredients: string;
  servings: number;
  instructions: string;
  link: string;
  rating: number;
  favorite: boolean;
  hidden: boolean;
}

export function ResultList({searchTerm}:{searchTerm: string}) {
  const [results, setResults] = useState<Result[]>([])

  useEffect(() => {
    const options = {

      params: {
        ingredients: searchTerm,
        number: '100',
        ignorePantry: 'false',
        ranking: '2',
        type: 'drink'
      },
      headers: {
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': 'bac5b9dc17msh2d4a352662dd6a7p190c49jsn86be79361b22'
      }
    };
    
    axios.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients', options).then(function (response: any) {
      console.log(response.data);
      // sorting logic here
  
      const cocktails = response.data as Result[];
  

      setResults(cocktails.filter( cocktail  => cocktail.missedIngredientCount <= 5 && cocktail.id != 506555))
      // setResults(cocktails)
  
    }).catch(function (error: any) {
      console.error(error);
    });
  }, [searchTerm])
  return(
    <div>
      <h2>Results for {searchTerm}</h2>
    {results.map((result) => {return <ResultItem key={result.id} result={result}></ResultItem>})}

    </div>
  )
}

export function ResultItem({ result }: { result: Result }) {
  const [hidden, setHidden] = useState(false);

  function toggleHidden() {
    setHidden(!hidden);
  }

  const [fullResults, setFullResults] = useState<Result>(result)

  useEffect(() => {
    const options = {

      headers: {
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': 'bac5b9dc17msh2d4a352662dd6a7p190c49jsn86be79361b22'
      }
    };
    

    axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${result.id}/information`, options).then(function (response: any) {
      console.log(response.data);
      // sorting logic here
  
      const cocktails = response.data as Result;

      // setResults(cocktails.filter( cocktail  => cocktail.missedIngredientCount === 0))
      setFullResults(cocktails)
  
    }).catch(function (error: any) {
      console.error(error);
    });
  }, [])


  // toggle(index: number) {

  //     result.hidden[index] = !result.hidden[index]
  //     this.setState({ reviews })
  //   }

  return (
    <ul className="resultsListContainer">
      <li>
        <p>{result.id}</p>
        <p>{result.title}</p>
        <img src={result.image} onClick={toggleHidden}></img>
        {result.missedIngredientCount === 1 && <p>You are missing 1 ingredient</p>}
        {result.missedIngredientCount > 1 && <p>You are missing {result.missedIngredientCount} ingredients</p>}
        {/* want to call API to search ID upon click */}
        {hidden === true && (
          <div className="moreDetailsContainer">
            <p> {fullResults.ingredients} </p>
            <p> {fullResults.instructions} </p>
            <p> {fullResults.link} </p>
            <p> {fullResults.rating} </p>
            {/* might be image instead */}
            <p> {fullResults.favorite} </p>
            {/* might be image instead */}
          </div>
        )}
      </li>
    </ul>
  );
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
