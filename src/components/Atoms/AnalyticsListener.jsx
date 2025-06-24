// src/AnalyticsListener.jsx
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function AnalyticsListener() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-XYTGMKK929', {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
}
