// src/components/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => (
  <section className="flex flex-col-reverse lg:flex-row items-center py-16 px-4 lg:px-8">
    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
      <h1 className="text-4xl font-bold">
        Build with Trust.<br/>
        <span className="text-blue-600">Get paid with Certainty.</span>
      </h1>
      <p className="text-gray-700">
        TrustConstruct connects clients and contractors through secure milestone contracts and escrow‐backed payments.
      </p>
      <div className="space-x-4">
        <a href="https://platform.thetrustconstruct.com"
           className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Try Trust →
        </a>
        <a href="https://youtube.com/shorts/8etFMtBR79A"
           className="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
          Watch Demo
        </a>
      </div>
    </div>

    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
      <img
        src="https://i.postimg.cc/fTSCy0xB/image.png"
        alt="Contractor and client"
        className="w-full h-auto object-contain"
      />
    </div>
  </section>
);

export default HeroSection;
