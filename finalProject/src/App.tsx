import React from 'react';
import './App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import {ResultList} from './Results';
import { useState } from 'react'

function App() {
  const [searchTerm, setSearchTerm]= useState('')


  return (
    <div className="App">
      <Header/>
      <SearchForm setSearchTerm={setSearchTerm}/>
      <ResultList searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
