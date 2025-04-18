// Logo.jsx
import React from 'react';
import logo from '../../assets/logo.svg'; 

const Logo = ({ size = "w-16 h-16", ...props }) => {
  return (
    <img
      src={logo}
      alt="Logo"
      className={`${size}`}
      {...props}
    />
  );
};

export default Logo;
