import './SearchForm.css'
import addIcon from './assets/addIcon.png'
import searchIcon from './assets/searchIcon.png'
import {useState} from 'react'
import removeIcon from './assets/removeIcon.png'

function SearchForm() {
  const [ingredients, setIngredients] = useState<Array<string>>([])
  const [searchQuery, setSearchQuery] = useState('')

  function clearSearchBox() {

  }

  function addIngredient() {
    setIngredients(ingredients.concat(searchQuery))
  }

  function clickSearch() {
    setSearchQuery(ingredients.toString())
  }

  function clearIngredients() {
    setIngredients([])
  }

function handleDeleteIngredient(index: number) {
  // immutable delete
  setIngredients(prevIngredients => [
    ...prevIngredients.slice(0, index),
    ...prevIngredients.slice(index + 1)
  ]);
}


  return (
    <body className='searchFormContainer'>
      <div className="wrapper">
        <div className="searchInput">
            <a href="" target="_blank" hidden></a>
            <input type="text" placeholder="Type to search.." onChange={(e)=>setSearchQuery(e.target.value)}></input>
            <div className="icon">
              <img src={addIcon} alt='plus sign' onClick={addIngredient} ></img>
              <img src={searchIcon} alt='search sign' className="fas fa-search" onClick={clickSearch}></img>
            </div>
        </div>
      </div>

      <div className='searchQueryContainer'>
        <p>Your included ingredients</p>
        <div className='ingredientsContainer'>
            <ul className='ingredientsList'> 
              {
                ingredients.map((ingredient, i) => 
                <li key={i}> 
                {ingredient} 
                <img  key={i} src={removeIcon} alt='remove button' 
                onClick={() => {handleDeleteIngredient(i)}}></img>
                </li>)
            }
            </ul>
        </div>
        <button onClick={clearIngredients}>Remove All Ingredients</button>
      </div>

    </body>
  );
}

export default SearchForm;