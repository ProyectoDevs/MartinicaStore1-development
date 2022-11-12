import './App.css';
import React from 'react';
<<<<<<< HEAD
import Header from './components/layout/Header';
import  Footer  from './components/layout/Footer';
=======
import Header from './components/Header';
import Footer from './components/layout/Footer';
>>>>>>> jules
import Home from './components/Home';
import { ProductDetails } from './components/products/ProductDetails';
//Router traido desde react-router-dom (no confundir con el de express)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard';
import ProductsList from './components/admin/ProductsList';
import NewProduct from './components/admin/newProduct';
import Cart from './components/cart/Cart';
<<<<<<< HEAD

=======
import Login from './components/user/Login';
>>>>>>> jules


function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />}/>
<<<<<<< HEAD
=======
            <Route path="/productos" element={<Home />}/>
>>>>>>> jules
            <Route path="/Home" element={<Home />}/>
            <Route path="/producto/:id" element={<ProductDetails />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/productList" element={<ProductsList />}/>
            <Route path="/nuevoProducto" element={<NewProduct />}/>
            <Route path="/search/:keyword" element={<Home />}/>
            <Route path="/carrito" element={<Cart />}/>
<<<<<<< HEAD
          </Routes>
        </div>
      <Footer />
=======
            <Route path="/login" element={<Login />}/>
          </Routes>
        </div>
        <Footer />
>>>>>>> jules
    </div>
    </Router>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> jules
