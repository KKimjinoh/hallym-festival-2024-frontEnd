import React, { useEffect, useState } from 'react';
import Background from '@/Layout/Background';
import moment from 'moment';
import { Header } from '@/Layout';
import ReservationPriviteModal from '@/Layout/Modal/ReservationPriviteModal/ReservationPriviteModal.jsx';
import './index.module.scss';

const ReservationDetail = () => {
  const [open, setOpen] = useState(false);
  const [nowTime] = useState(moment().format('HH:mm:ss'));
  useEffect(() => {
    const timeFormated = moment(nowTime, 'HH:mm:ss');

    if (
      timeFormated.isAfter(moment('08:30:00', 'HH:mm:ss')) &&
      timeFormated.isBefore(moment('09:30:00', 'HH:mm:ss'))
    ) {
      console.log('시간');
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [nowTime]);

  return (
    <div className="ReservationDetail">
      <Background />
      <Header />

      {open ? (
        <ReservationPriviteModal />
      ) : (
        //  전지회용으로 대기창 잠시 없앰
        <ReservationPriviteModal />
        //<ReservationWait nowTime={nowTime} />
      )}
    </div>
  );
};

export default ReservationDetail;
