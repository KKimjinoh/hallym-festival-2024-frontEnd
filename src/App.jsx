import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import useViewPort from './hooks/useViewport';

import Home from './pages/Home/index.jsx';
import NotFound from './pages/NotFound/index.jsx';
import Info from './pages/Info/index.jsx/index.js';
import GoodsPromotion from './pages/GoodsPromotion/index.jsx/index.js';
import LostItem from './pages/LostItem/index.jsx';
import PromotionalVideo from './pages/PromotionalVideo/index.jsx';
import Reservation from './pages/Reservation/index.jsx';
import Community from './pages/Community/index.jsx';
import DesktopUI from './Layout/DesktopUI/DesktopUI.jsx';
import BoothSelector from './pages/Info/Booth/BoothSelector/index.jsx';
import Notice from './pages/Notice/Notice.jsx';
import Landing from './pages/Landing/index.jsx';
import Lineup from './pages/LineUp/index.jsx';
import Pub from './pages/Info/Pub/index.jsx';
import Information from './pages/Reservation/Information/index.jsx';
import ReservationDetail from './pages/Reservation/Detail/index.jsx';
import Goods from './pages/GoodsPromotion/Goods/index.jsx';
import Bingo from './pages/GoodsPromotion/Bingo/index.jsx';
import HopeGround from './pages/Info/Booth/HopeGround/index.jsx';
import Gidam from './pages/Info/Gidam/index.jsx';
import Inspection from './pages/Inspection/index.jsx';
import Playground from './pages/Info/Booth/Playground';
import Stage from './pages/Info/Stage';

const App = () => {
  useViewPort();

  return (
    <>
      <DesktopUI />
      <div className="content">
        <Routes>
          <Route path="/" exact={true} element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/lineup" element={<Lineup />} />
          <Route path="/lostItem" element={<LostItem />} />
          <Route path="/promotionalVideo" element={<PromotionalVideo />} />
          {/* goodsPromotion */}
          <Route path="/goodsAndEvents" element={<GoodsPromotion />} />
          <Route path="/goods" element={<Goods />} />
          <Route path="/events" element={<Bingo />} />
          {/* info */}
          <Route path="/info" element={<Info />} />
          <Route path="/boothinfo" element={<BoothSelector />} />
          <Route path="/hopeGroundInfo" element={<HopeGround />} />
          <Route path="/playgroundInfo" element={<Playground />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/pubInfo" element={<Pub />} />
          <Route path="/stageInfo" element={<Stage />} />
          <Route path="/gidam" element={<Gidam />} />
          {/* reservation */}
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/reservationInfo" element={<Information />} />
          <Route path="/reservationDetail" element={<ReservationDetail />} />
          {/* system */}
          <Route path="/inspection" element={<Inspection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
