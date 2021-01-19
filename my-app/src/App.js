import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import './App.css';

import {BrowserRouter,Route,Link} from 'react-router-dom'

//import my components

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import HomeLoading from './screens/HomeLoading';

function App() {
  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
    <div className="App">
      <div className="grid-container">

<header className="header">

  <div className="brand">

    <button onClick={openMenu}>

      &#9776;

    </button>

    <Link to="/">amazona</Link>

  </div>

  <div className="header-links">

    <a href="cart.html">Cart</a>

    <a href="signin.html">Sign In</a>

  </div>

</header>

<aside className="sidebar nav">

  <h3>Shopping Categories</h3>

  <button className="sidebar-close-button" onClick={closeMenu}>x</button>

  <ul>

    <li>

      <a href="index.html">Pants</a>

    </li>



    <li>

      <a href="index.html">Shirts</a>

    </li>



  </ul>

</aside>

<main className="main">

  <div className="content">

    <Route path="/product/:id" component={ProductScreen}></Route>
    <Route path="/" exact={true} component={HomeScreen}></Route>
    <Route path="/home" exact={true} component={HomeLoading}></Route>
    
  </div>



</main>

<footer className="footer">

  All right reserved.

</footer>

</div>
    </div>
    </BrowserRouter>
  );
}

export default App;
