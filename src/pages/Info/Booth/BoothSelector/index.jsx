import React from 'react';
import './index.module.scss';
import { useNavigate } from 'react-router-dom';
import { Header, Background } from '@/Layout';
const BoothSelector = () => {
  const navigate = useNavigate();
  const handlePlaygroundInfo = () => {
    navigate('/playgroundInfo');
  };
  const handleEvents = () => {
    navigate('/hopeGroundInfo');
  };

  return (
    <div className="BoothInfo">
      <Background hasLogo={true} />
      <Header headcenter="부스 안내" />
      <div className="BoothInfo-container">
        <div className="BoothInfo-container-wrapper">
          <div className="BoothInfo-container-wrapper-goods" onClick={handlePlaygroundInfo}>
            <p>대운동장 부스</p>
          </div>
          <div className="BoothInfo-container-wrapper-events" onClick={handleEvents}>
            <p>희망터 부스</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoothSelector;
