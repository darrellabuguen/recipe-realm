import './App.css'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import SearchResult from './pages/SearchResult';
import Recipe from './pages/Recipe';
import Navi from './components/Navi';
import Cuisines from './pages/Cuisines';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navi />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/category/:categoryname/:pagenum" element={<Category />} />
          <Route exact path="/search/:query/:pagenum" element={<SearchResult />} />
          <Route exact path="/recipe/:recipetitle/:recipeid" element={<Recipe />} />
          <Route exact path='/cuisines' element={<Cuisines />} />
          <Route exact path='/cuisine/:cuisinename/:pagenum' element={<Cuisines />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
