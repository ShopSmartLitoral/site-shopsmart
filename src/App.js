import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// TODO habilitar rotas
import Home from "./pages/Home";
// import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import constants from './utils/constants';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route 
            exact 
            path='/product/iphone' 
            element={<ProductList />}
            props={constants.TYPE.IPHONE}
            />
          <Route
            exact 
            path='/product/xiaomi' 
            element={<ProductList />}
            props={constants.TYPE.XIAOMI}
            />          
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;