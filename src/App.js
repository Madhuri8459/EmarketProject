import React from 'react';
import {BrowserRouter, Form, Route,Routes } from 'react-router-dom';
import ProductFilter from './components/ProductFilter';
import Home from './components/Home';
import LoginFilter from './components/LoginFilter';
import Register from './components/Register';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import OrderPayment from './components/OrderPayment';
import Customer_Profile from './components/Customer_Profile';
const App = () => {
  return (
    <div>
      {/* <Navbar />
      <Product/> */}
      <BrowserRouter>
      <Routes>
     <Route path="products-filters" element={<ProductFilter/>}/>
     </Routes>
      </BrowserRouter>

      <BrowserRouter>
      <Routes>
     <Route path="/" element={<Home/>}/>
     </Routes>
      </BrowserRouter>

      <BrowserRouter>
      <Routes>
     <Route path="login-filters" element={<LoginFilter/>}/>
     </Routes>
      </BrowserRouter>

      <BrowserRouter>
      <Routes>
     <Route path="register" element={<Register/>}/>
     </Routes>
      </BrowserRouter>

      <BrowserRouter>
      <Routes>
     <Route path="productdetails" element={<ProductDetails/>}/>
     </Routes>
      </BrowserRouter>

      <BrowserRouter>
      <Routes>
     <Route path="shoppingcart" element={<ShoppingCart/>}/>
     </Routes>
      </BrowserRouter>
      <BrowserRouter>
      <Routes>
     <Route path="order_payment" element={<OrderPayment/>}/>
     </Routes>
      </BrowserRouter>
      <BrowserRouter>
      <Routes>
     <Route path="customer_profile" element={<Customer_Profile/>}/>
     </Routes>
      </BrowserRouter>
      

 </div>
  )
}

export default App;