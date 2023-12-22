import React from "react";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  return (
    <React.Fragment>
      <ErrorBoundary>
        <div className="App">
          <Home />
        </div>
      </ErrorBoundary>
    </React.Fragment>
  );
};

export default App;
