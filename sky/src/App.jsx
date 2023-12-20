import React from "react";
import Home from "./pages/Home";
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
