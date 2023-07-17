import { useState } from 'react';

export const useCarouselWidth = (minWidth: number, maxWidth: number) => {
  const [width, setWidth] = useState(minWidth);

  new ResizeObserver(entries => {
    entries.forEach(entry => {
      const observedWidth = entry.contentRect.width;

      if (entry.contentRect.width > maxWidth) {
        setWidth(maxWidth);
      } else if (entry.contentRect.width < minWidth) {
        setWidth(minWidth);
      } else {
        setWidth(observedWidth);
      }
    });
  }).observe(document.body);

  return width;
};
