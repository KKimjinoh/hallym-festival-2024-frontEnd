import React, { useEffect, useState } from 'react';
import { BoothInfo } from '../../components/index.js';
import './PlaygroundInfo.scss';
import boothList from '../../datas/booth.json';
import { Header, Background } from '@/Layout';

const PlaygroundInfo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(boothList);
  }, []);

  return (
    <div className="playgroundInfo">
      <Background hasPub={true} />
      <Header className="both_header" headcenter="부스 안내" />
      <div className="playgroundInfo-container">
        <div className="playgroundInfo-container-wrapper">
          {/* <img src={booth} alt="운동장 부스 배치도" className="booth-image" /> */}
          <BoothInfo data={data} />
        </div>
      </div>
    </div>
  );
};

export default PlaygroundInfo;
