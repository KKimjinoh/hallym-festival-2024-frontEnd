import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Info from "./pages/Info/Info.jsx";
import GoodsAndEvents from "./pages/GoodsAndEvents/GoodsAndEvents.jsx";
import LostItem from "./pages/LostItem/LostItem.jsx";
import PromotionalVideo from "./pages/PromotionalVideo/PromotionalVideo.jsx";
import Reservation from "./pages/Reservation/Reservation.jsx";
import Schedule from "./pages/Schedule/Schedule.jsx";
import Community from "./pages/Community/Community.jsx";
import QR from "./pages/QR/QR.jsx";
import BoothInfo from "./pages/BoothInfo/BoothInfo.jsx";
import Notice from "./pages/Notice/Notice.jsx";
import Start from "./pages/Start/Start.jsx";
import Login from "./pages/Login/Login.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import AdminCommunity from "../src/components/AdminComponents/AdminCommunity.jsx";
import AdminLostItem from "../src/components/AdminComponents/AdminLostItem.jsx";
import AdminNotice from "../src/components/AdminComponents/AdminNotice.jsx";

const App = () => {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <>
      <QR />
      <div className="content">
        <Routes>
          <Route path="/" exact={true} element={<Start />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/info" element={<Info />} />
          <Route path="/boothinfo" element={<BoothInfo />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/goodAndEvents" element={<GoodsAndEvents />} />
          <Route path="/community" element={<Community />} />
          <Route path="/lostItem" element={<LostItem />} />
          <Route path="/promotionalVideo" element={<PromotionalVideo />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="admin/lostitem" element={<AdminLostItem />} />
          <Route path="admin/notice" element={<AdminNotice />} />
          <Route path="admin/community" element={<AdminCommunity />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
