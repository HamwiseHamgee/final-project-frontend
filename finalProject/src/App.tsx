import React from 'react';
import './App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import {ResultList} from './Results';
import { useState } from 'react'
import './Results.css'
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [searchTerm, setSearchTerm]= useState('')


  return (

    <div className="App">
      <Header/>
        <div className='homeContainer'> 
          
          <SearchForm setSearchTerm={setSearchTerm}/>
          <div className='resultsGrid'>
            <ResultList searchTerm={searchTerm}/>
          </div>
        </div>


    </div>
  );
}


export default App;