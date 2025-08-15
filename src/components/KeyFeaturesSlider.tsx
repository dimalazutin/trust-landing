// src/components/KeyFeaturesSlider.tsx

import React, { useState } from 'react';

interface Slide {
  img: string;
  caption: string;
}

const slides: Slide[] = [
  {
    img: 'https://i.postimg.cc/pdYrcJ3G/qr-scan.png',
    caption: 'Scan receipts with QR code'
  },
  {
    img: 'https://i.postimg.cc/jqNxMXNz/track-progress.png',
    caption: 'Track your earnings in real time'
  },
  {
    img: 'https://i.postimg.cc/0QPfhZjb/Chat-GPT-Image-17-2025-22-15-39.png',
    caption: 'Get an estimate in 20 minutes'
  },
  {
    img: 'https://i.postimg.cc/2jPwDzVs/Chat-GPT-Image-17-2025-22-27-42.png',
    caption: 'Setup your P&L effortlessly'
  },
  {
    img: 'https://i.postimg.cc/nhqS5X2S/image-13.png',
    caption: 'Transparent sub-contractor workflows'
  },
  {
    img: 'https://i.postimg.cc/mZQwBvCh/Chat-GPT-Image-17-2025-23-06-52.png',
    caption: 'Construction & remodeling made easy'
  },
  {
    img: 'https://i.postimg.cc/x8YLXdM8/Chat-GPT-Image-17-2025-23-12-27.png',
    caption: 'Secure milestone payments'
  },
  {
    img: 'https://i.postimg.cc/kMcbjqWN/Chat-GPT-Image-17-2025-23-15-58.png',
    caption: 'Built-in contracts & estimates'
  },
  {
    img: 'https://i.postimg.cc/tJQNhjnZ/Chat-GPT-Image-17-2025-23-39-01.png',
    caption: 'Verified professionals & ratings'
  },
  {
    img: 'https://i.postimg.cc/GpDBvsFK/Chat-GPT-Image-17-2025-23-49-25.png',
    caption: 'Automated dispute resolution'
  }
];

const KeyFeaturesSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <div key={idx} className="flex-none w-full px-2">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="w-full aspect-[3/2] bg-gray-100">
                    <img
                      src={slide.img}
                      alt={slide.caption}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <p className="p-4 text-center text-gray-700 text-lg">
                    {slide.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-3 mt-6">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-4 h-4 rounded-full ${
                current === idx ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSlider;
