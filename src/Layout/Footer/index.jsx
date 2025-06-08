import React from 'react';
import './index.module.scss';

const Footer = ({ string }) => {
  return (
    <footer className="footer">
      <div>{string}</div>
    </footer>
  );
};
export default Footer;
