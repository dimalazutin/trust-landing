import React from "react";

const slides = [
  {
    img: "https://i.postimg.cc/Gp4w1Ydr/illustration-2.webp",
    caption: "Scan receipts with QR code",
  },
  {
    img: "https://i.postimg.cc/rw8M7KDF/illustration.webp",
    caption: "Track your earnings in real time",
  },
];

const FeaturesCarousel: React.FC = () => (
  <section id="features" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-12">
        Key Features
      </h2>
      <div className="flex overflow-x-auto space-x-6 pb-4">
        {slides.map((s, i) => (
          <div
            key={i}
            className="min-w-[300px] bg-white rounded-2xl shadow-md overflow-hidden flex-shrink-0"
          >
            <img
              src={s.img}
              alt={s.caption}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center text-gray-700">{s.caption}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesCarousel;
