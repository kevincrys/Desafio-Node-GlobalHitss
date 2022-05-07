import React from 'react';
import { BrowserRouter, Route ,Router } from "react-router-dom";


import Login from "./Login";


function MyRoutes() {
  return (
    <Router>

      <Route path="/" component={Login} />

    </Router>
  );
}

export default MyRoutes;
