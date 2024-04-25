import React from 'react';
import {useEffect} from "react";
import './App.css';
import ClickPage from "./ClickPage";
import Navbar from "./Navbar";
import ProfilePage from "./ProfilePage";
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import ScrollContainer from "./ScrollContainerHorizontal";
import HotDeals from "./HotDeals";

function App() {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

    }, []);
  return (
      <Router>
      <div className="App">
        <div className="content">
            <Routes>
                <Route path="/" element={<ClickPage/>}></Route>
                <Route path="/profile" element={<ProfilePage/>}></Route>
                <Route path="/hotdeals" element={<HotDeals></HotDeals>}></Route>
            </Routes>
        </div>
          <Navbar></Navbar>
      </div>
      </Router>
  );
}
export default App;
