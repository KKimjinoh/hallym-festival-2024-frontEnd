import React from 'react';
import './index.module.scss';
import { Header, Background } from '@/Layout';

import { useNavigate } from 'react-router-dom';

const GoodsPromotion = () => {
  const navigate = useNavigate();
  const handleGoods = () => {
    navigate('/goods');
  };
  const handleEvents = () => {
    navigate('/events');
  };
  return (
    <div className="goodsAndEvents">
      <Background hasLogo={true} />
      <Header headcenter="굿즈 / 이벤트" />
      <div className="goodsAndEvents-container">
        <div className="goodsAndEvents-container-wrapper">
          <div className="goodsAndEvents-container-wrapper-goods" onClick={handleGoods}>
            <p>굿즈</p>
          </div>
          <div className="goodsAndEvents-container-wrapper-events" onClick={handleEvents}>
            <p>이벤트</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodsPromotion;
