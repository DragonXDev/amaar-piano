import React, { useEffect, useRef } from 'react';

interface CarouselProps {
  items: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let currentIndex = 0;
    const totalItems = items.length;

    const cycleItems = () => {
      container.style.transition = 'transform 0.5s ease-in-out';
      container.style.transform = `translateX(-${currentIndex * 100}%)`;

      currentIndex = (currentIndex + 1) % totalItems;

      if (currentIndex === 0) {
        setTimeout(() => {
          container.style.transition = 'none';
          container.style.transform = 'translateX(0)';
        }, 500);
      }
    };

    const intervalId = setInterval(cycleItems, 3000);
    return () => clearInterval(intervalId);
  }, [items.length]);

  return (
    <div className="card-carousel overflow-hidden">
      <div ref={containerRef} className="card-carousel__container flex">
        {items.map((item, index) => (
          <div key={index} className="card-carousel__item flex-shrink-0 w-full md:w-1/3 px-4">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
