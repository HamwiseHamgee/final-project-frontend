import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import Results from './Results';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SearchForm></SearchForm>
      <Results></Results>
    </div>
  );
}

export default App;
