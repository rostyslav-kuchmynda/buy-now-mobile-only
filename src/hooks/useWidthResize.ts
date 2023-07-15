import { useState, useEffect } from 'react';

export const useWidthSize = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  return width;
};
