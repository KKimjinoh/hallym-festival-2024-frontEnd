import React from 'react';
import YouTube from 'react-youtube';
import './index.module.scss';
import { Header, Background } from '@/Layout';
import { useNavigate } from 'react-router-dom';

// 메인에서 열리는게 아니고 페이지인데 굳이 모달이어야 하나?
// 일단 페이지 자체 구현하고 나중에 모달로 변경하기

const PromotionalVideo = () => {
  const navigate = useNavigate();

  const dummy = ['gR6ZEvBPcMc', 'jOiy5V-8eeU', 'lXLnu8jF3rk'];

  const opts = {
    height: '250',
    width: '370',
    playerVars: {
      autoplay: 0,
    },
  };
  const handleGoToBack = () => {
    navigate('/home');
  };
  return (
    <div className="promotionalVideo" onClick={handleGoToBack}>
      <Background hasLogo={true} />
      <Header />

      <div className="list_wrapper">
        <header className="item_header">홍보영상</header>
        <div className="item_wrapper">
          {dummy.map((it, index) => {
            return (
              <YouTube
                key={index}
                className="item"
                videoId={it}
                opts={opts}
                style={{ width: '100vw' }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PromotionalVideo;
