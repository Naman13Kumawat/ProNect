import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../Home/Home"
import EventCP from "../EventConnectPage/EventCP"
import SponsorCP from "../SponsorConnectPage/SponsorCP"
import { Routes, Route} from "react-router-dom";



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event_cp" element={<SponsorCP />} />
    </Routes>
    </>
  );
}

export default App;
