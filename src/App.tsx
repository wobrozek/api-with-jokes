import React from "react";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/Main";
import Watchlist from "./pages/Watchlist";
import CustomJokes from "./pages/CustomJokes";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route path="main" Component={Main}></Route>
          <Route path="watchlist" Component={Watchlist}></Route>
          <Route path="customJokes" Component={CustomJokes}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
