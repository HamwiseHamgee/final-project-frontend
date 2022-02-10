import './SearchForm.css'
import addIcon from './assets/addIcon.png'
import searchIcon from './assets/searchIcon.png'
import {useState, useEffect } from 'react'
import removeIcon from './assets/removeIcon.png'
import lineAccent from './assets/goldAccentLine.png'

function SearchForm({setSearchTerm}:{setSearchTerm: Function}) {
  const [ingredients, setIngredients] = useState<Array<string>>([])
  const [searchQuery, setSearchQuery] = useState('')

  function clearSearchBox() {
    setSearchQuery('')
  }

  useEffect(() => {
    activateSearch()
  },[ingredients])

  function addIngredient() {
    if (searchQuery === '') {
      alert('Please Enter an Ingredient');
    } else {
    setIngredients(ingredients.concat(searchQuery))
    clearSearchBox()
    }
  }

  function activateSearch() {
    setSearchTerm(ingredients.toString())
    console.log(ingredients)
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
    <div className='searchFormContainer'>
        <h1 className='searchFormTitle'>Ingredients</h1>
        <img className='searchLineAccent' src={lineAccent}></img>
      <div className="wrapper">
        <div className="searchInput">
            <input type="text" value={searchQuery} placeholder="Type to search..." 
            onChange={(e)=>setSearchQuery(e.target.value)}
            onKeyPress={(e) => {(e.key === 'Enter' && addIngredient())}}>
            </input>
              <img src={addIcon} alt='plus sign' onClick={addIngredient} ></img>
        </div>
      </div>

      <div className='searchQueryContainer'>
        <p className='ingredientsContainerTitle'>Your ingredients</p>
        <div className='ingredientsContainer'>
            <ul className='ingredientsList'> 
              {
                ingredients.map((ingredient, i) => 
                <li key={i} className='ingredientItem'> 
                {ingredient} 
                <img  key={i} src={removeIcon} alt='remove button' 
                onClick={() => {handleDeleteIngredient(i)}}></img>
                </li>)
            }
            </ul>
        </div>
        <button id='removeAllButton' onClick={clearIngredients}>
          <div id="underline"></div>
          <p>Remove All</p>          
        </button>
      </div>
    </div>
  );
}

export default SearchForm;