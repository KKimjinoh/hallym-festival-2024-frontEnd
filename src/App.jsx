import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import useViewPort from './hooks/useViewport';
import { DesktopUI } from './Layout';
import {
  Landing,
  Home,
  Community,
  Lineup,
  LostItem,
  PromotionalVideo,
  GoodsPromotion,
  Goods,
  Bingo,
  Info,
  BoothSelector,
  HopeGround,
  Playground,
  Notice,
  Pub,
  Stage,
  Gidam,
  Reservation,
  Information,
  ReservationDetail,
  Inspection,
  NotFound,
} from './pages';
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
