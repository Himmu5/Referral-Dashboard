import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ReferEarn from "./Refer&Earn/ReferEarn";
import { Route, Routes  } from "react-router";
import FriendReferral from "./FriendReferral/FriendReferral";
import Nav from "./Refer&Earn/Nav";

function App() {
  return (
    <div className="font-poppin">
      <Nav />
      
      <Routes>
        <Route path="/" element={<ReferEarn />} />
        <Route path="/FrindReferral" element={<FriendReferral />} />
      </Routes>
    </div>
  );
}

export default App;
