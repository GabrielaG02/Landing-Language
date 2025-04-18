// Logo.jsx
import React from 'react';
import logo from '../../assets/Logo-Latin-Language-Solutions-1-1024x1024-338w.webp'; 

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
