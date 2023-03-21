import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from "./components/navbar";
import Products from "./components/products";

function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
    <Routes>
      <Route path="/products" element={<Products/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
