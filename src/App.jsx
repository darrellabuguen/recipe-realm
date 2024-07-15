import { useState } from 'react'
import './App.css'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import SearchResult from './pages/SearchResult';
import Recipe from './pages/Recipe';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/category/:categoryname" element={<Category />} />
          <Route exact path="/search/:query" element={<SearchResult />} />
          <Route exact path="/recipe/:recipetitle/:recipeid" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
