import React from 'react';
import './App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import {ResultList} from './Results';
import { useState } from 'react'
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [searchTerm, setSearchTerm]= useState('')


  return (

    <div className="App">
      <Header/>
        <div className='homeContainer'> 
          <SearchForm setSearchTerm={setSearchTerm}/>
          <ResultList searchTerm={searchTerm}/>
        </div>


    </div>
  );
}


export default App;