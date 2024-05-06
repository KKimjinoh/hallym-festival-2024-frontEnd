import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoModal from "../../components/Modal/InfoModal";
import Background from "../../components/Layout/Background";
import "./Info.scss";

const Info = () => {
  const navigate = useNavigate();

  const [boothModal, setBoothModal] = useState(false);
  const [isGidam, setIsGidam] = useState(false);

  const handleCloseModal = () => {
    if (boothModal) {
      setBoothModal(false);
    }
  };

  return (
    <div className="Info" onClick={handleCloseModal}>
      <Background />
      <div className="info_wrapper">
        {!boothModal && (
          <>
            <div className="info_box" onClick={() => navigate("/boothinfo")}>
              부스 안내
            </div>
            <div
              className="info_box"
              onClick={() => {
                setBoothModal(true);
                setIsGidam(false);
              }}
            >
              무대 안내
            </div>
            <div
              className="info_box"
              onClick={() => {
                setBoothModal(true);
                setIsGidam(true);
              }}
            >
              기담 안내
            </div>
            <div className="info_box" onClick={() => navigate("/notice")}>
              공지사항
            </div>
          </>
        )}
        {boothModal && (
          <InfoModal value={isGidam} onClose={() => setBoothModal(false)} />
        )}
      </div>
    </div>
  );
};

export default Info;