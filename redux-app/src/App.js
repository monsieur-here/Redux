import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import HomePage from "./components/HomePage";
import "./App.css"
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store/store"

function App() {
  return (
    <div className="App"> 
      <Provider store={store}>
        <BrowserRouter>  
          <Navbar />
          <Routes>   
            <Route path="/" element = {<HomePage />}></Route>
            <Route path="/cart" element = {<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
