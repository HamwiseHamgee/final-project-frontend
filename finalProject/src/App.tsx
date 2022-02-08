import React from "react";
import "./App.css";
import Header from "./Header";
import SearchForm from "./SearchForm";
import { ResultList } from "./Results";
import { useState } from "react";
import "./Results.css";
import Favorites from "./Favorites";
import { FavoriteContext, FavoritesContextProvider } from "./FavoritesContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import Home from "./Home";
import Login from './Login'

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <div className="App">
        <Header />

        <div className="homeContainer">
          <FavoritesContextProvider>

            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/login" element={<Login />} />

            </Routes>

          </FavoritesContextProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
