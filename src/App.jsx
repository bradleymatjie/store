import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home';
import { Nav } from './Components/Nav/Nav';
import { Bag } from './Components/Bag/Bag';
import { Product } from './Pages/Product/Product';
import { ProductsInBag } from './Pages/ProductsInBag/ProductsInBag';

function App() {
  const [menuToggler, setMenuToggler] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const handleClick = (product) => {
      setSelectedProduct(prevState => [...prevState, product]);
        console.log(selectedProduct);
  };


  return (
    <div className='app'>
      <Nav 
        menuTogglerFunction={setMenuToggler} 
        menuTogglerValue={menuToggler} 
      />
      <Routes>
        <Route path='/store/' element={<Home  handleClick={handleClick} />}/>
        <Route path='/store/bag' element={<ProductsInBag selectedProduct={selectedProduct} />} />
        <Route path='/store/:id' element={<Product />}/>
      </Routes>

      <Bag selectedProduct={selectedProduct} />
    </div>
  )
}

export default App
