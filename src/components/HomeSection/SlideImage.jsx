import React, { useState, useEffect } from 'react';

const images = [
  'https://picsum.photos/id/1018/800/300',
  'https://picsum.photos/id/1015/800/300',
  'https://picsum.photos/id/1016/800/300',
  'https://picsum.photos/id/1020/800/300',
  'https://picsum.photos/id/1024/800/300',
  'https://picsum.photos/id/1035/800/300',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1: forward, -1: backward

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        let next = prevIndex + direction;
        if (next >= images.length) {
          setDirection(-1);
          return prevIndex - 1;
        } else if (next < 0) {
          setDirection(1);
          return prevIndex + 1;
        }
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="block md:hidden"> {/* 👈 visible only below 768px */}
      <div className="w-full max-w-[800px] h-[200px] overflow-hidden mx-auto shadow-md relative">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full flex-shrink-0 h-[200px] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
