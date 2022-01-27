import { useState } from "react";

interface Result {
  name: string;
  thumbnail: string;
  ingredients: string;
  directions: string;
  link: string;
  rating: number;
  favorite: boolean;
  hidden: boolean;
}

// function Results() {
//     return(
//     <div className='results'>
//         <h2>Here are the drinks you can make</h2>
//         <h2>Results based on ingredients</h2>
//         <div className='tileContainer'>
//             {/* tiles go here */}
//         </div>
//         <button className='crisisButton'>CRISIS BUTTON</button>
//     </div>
//     )
// }

// export default Results

function ResultItem({ result }: { result: Result }) {
  const [hidden, setHidden] = useState(false);

  function toggleHidden() {
    setHidden(!hidden);
  }

  // toggle(index: number) {

  //     result.hidden[index] = !result.hidden[index]
  //     this.setState({ reviews })
  //   }

  return (
    <ul className="resultsListContainer">
      <li>
        <p>{result.name}</p>
        <img src={result.thumbnail} onClick={toggleHidden}></img>
        {hidden === true && (
          <div className="moreDetailsContainer">
            <p> {result.ingredients} </p>
            <p> {result.directions} </p>
            <p> {result.link} </p>
            <p> {result.rating} </p>
            {/* might be image instead */}
            <p> {result.favorite} </p>
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
