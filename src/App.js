import React from "react";
// import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/Header/Header";
import "./App.css";
import SimpleBottomNavigation from "./components/MainNav";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
          {/* <Switch> */}
            {/* <Route path="/" exact component={Trending} /> */}
            <Route element={<Trending />} path="/" />
            < Route element={<Movies />} path="/Movies" />
           
          <Route element={<Series />} path="/Series" />
            {/* <Route path="/Movies" component={Movies} /> */}
            <Route path="/Series" component={Series} />
            
            <Route path="/Search" component={Search} />
          {/* </Switch> */}
          </ Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
