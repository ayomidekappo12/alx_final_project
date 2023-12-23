import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
