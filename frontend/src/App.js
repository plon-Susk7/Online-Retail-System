import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from "./components/navbar";
import Products from "./components/products";
import Category from './components/category';
import Brand from './components/brand';
import Signup from './components/signup';


function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
    <Routes>
      <Route path="/products" element={<Products/>}/>
      <Route path="/categories" element={<Category/>}/>
      <Route path="/brands" element={<Brand/>}/>
      <Route path="/signup" element={<Signup/>}/>
      
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
