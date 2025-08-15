// src/components/LogoIntroAnimation.tsx
import React, { useState, useEffect } from 'react';

const LogoIntroAnimation: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState(0); // 0: initial, 1: animate, 2: fade out
  
  useEffect(() => {
    // Check if intro has already been shown
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    
    if (hasSeenIntro) {
      setIsVisible(false);
      if (onComplete) onComplete();
      return;
    }

    sessionStorage.setItem('hasSeenIntro', 'true');

    // Start animation sequence
    const timer1 = setTimeout(() => setPhase(1), 100);
    const timer2 = setTimeout(() => setPhase(2), 1500);
    const timer3 = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center overflow-hidden transition-opacity duration-500 ${phase === 2 ? 'opacity-0' : 'opacity-100'}`}>
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Logo animation container */}
      <div className="relative">
        {/* Version 1: Logo assembly animation */}
        <div className={`relative transition-all duration-1000 ${phase >= 1 ? 'scale-100' : 'scale-0'}`}>
          {/* Blue diamond/arrow part */}
          <div 
            className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
              phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <img
              src="https://i.postimg.cc/zB0wGQvV/logo-TC.png"
              alt="TrustConstruct Logo"
              className="h-32 w-auto filter drop-shadow-2xl"
            />
          </div>

          {/* Text animation overlay */}
          <div 
            className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
              phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-150'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-2 tracking-wider">
                <span className="text-blue-400">Trust</span>
                <span className="text-white">Construct</span>
              </h1>
              <p className="text-blue-300/70 text-sm tracking-widest uppercase">
                Building Trust Together
              </p>
            </div>
          </div>
        </div>

        {/* Loading indicator */}
        <div className={`absolute -bottom-20 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 150}ms`,
                  animationDuration: '1s',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Skip button */}
      <button
        onClick={() => {
          setIsVisible(false);
          if (onComplete) onComplete();
        }}
        className={`absolute bottom-10 right-10 px-4 py-2 text-white/70 text-sm border border-white/20 rounded hover:bg-white/10 hover:text-white transition-all ${
          phase >= 1 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Skip →
      </button>
    </div>
  );
};

// Alternative version with morphing animation
export const MorphingLogoIntro: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [stage, setStage] = useState(0); // 0: logo only, 1: with text, 2: fade
  
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    
    if (hasSeenIntro) {
      setIsVisible(false);
      if (onComplete) onComplete();
      return;
    }

    sessionStorage.setItem('hasSeenIntro', 'true');

    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 6500), // 7 seconds total
      setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 7000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-700 ${stage === 2 ? 'opacity-0' : 'opacity-100'}`}>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/20 to-transparent animate-pulse" />

      {/* Main content */}
      <div className="relative">
        {/* Logo */}
        <div className={`transition-all duration-1000 transform ${stage >= 1 ? 'scale-75 -translate-y-8' : 'scale-100'}`}>
          <img
            src="https://i.postimg.cc/CKj57fV0/logo-black.png"
            alt="TrustConstruct"
            className={`h-40 w-auto mx-auto filter ${stage === 0 ? 'brightness-0 invert' : ''} transition-all duration-1000`}
          />
        </div>

        {/* Text reveal - Three lines */}
        <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 transition-all duration-700 ${
          stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="text-center">
            {/* First line: The New Way */}
            <div className="text-4xl font-bold text-white mb-1">
              <span className="inline-block animate-fadeInChar" style={{ animationDelay: '0ms' }}>T</span>
              <span className="inline-block animate-fadeInChar" style={{ animationDelay: '50ms' }}>h</span>
              <span className="inline-block animate-fadeInChar" style={{ animationDelay: '100ms' }}>e</span>
              <span className="inline-block animate-fadeInChar mr-2" style={{ animationDelay: '150ms' }}></span>
              <span className="inline-block animate-fadeInChar" style={{ animationDelay: '200ms' }}>N</span>
              <span className="inline-block animate-fadeInChar" style={{ animationDelay: '250ms' }}>e</span>
              <span className="inline-block animate-fadeInChar" style={{ animationDelay: '300ms' }}>w</span>
              <span className="inline-block animate-fadeInChar mr-2" style={{ animationDelay: '350ms' }}></span>
              <span className="inline-block animate-fadeInChar" style={{ animationDelay: '400ms' }}>W</span>
              <span className="inline-block animate-fadeInChar" style={{ animationDelay: '450ms' }}>a</span>
              <span className="inline-block animate-fadeInChar" style={{ animationDelay: '500ms' }}>y</span>
            </div>
            
            {/* Second line: To Build */}
            <div className="text-4xl font-bold text-white mb-1">
              <span className="inline-block animate-fadeInChar" style={{ animationDelay: '550ms' }}>T</span>
              <span className="inline-block animate-fadeInChar" style={{ animationDelay: '600ms' }}>o</span>
              <span className="inline-block animate-fadeInChar mr-2" style={{ animationDelay: '650ms' }}></span>
              <span className="inline-block animate-fadeInChar" style={{ animationDelay: '700ms' }}>B</span>
              <span className="inline-block animate-fadeInChar" style={{ animationDelay: '750ms' }}>u</span>
              <span className="inline-block animate-fadeInChar" style={{ animationDelay: '800ms' }}>i</span>
              <span className="inline-block animate-fadeInChar" style={{ animationDelay: '850ms' }}>l</span>
              <span className="inline-block animate-fadeInChar" style={{ animationDelay: '900ms' }}>d</span>
            </div>
            
            {/* Third line: TRUST */}
            <div className="text-4xl font-bold">
              <span className="inline-block animate-fadeInChar" style={{ animationDelay: '950ms', color: '#3b82f6' }}>T</span>
              <span className="inline-block animate-fadeInChar" style={{ animationDelay: '1000ms', color: '#3b82f6' }}>R</span>
              <span className="inline-block animate-fadeInChar" style={{ animationDelay: '1050ms', color: '#3b82f6' }}>U</span>
              <span className="inline-block animate-fadeInChar" style={{ animationDelay: '1100ms', color: '#3b82f6' }}>S</span>
              <span className="inline-block animate-fadeInChar" style={{ animationDelay: '1150ms', color: '#3b82f6' }}>T</span>
            </div>
          </div>
        </div>

        {/* Shine effect */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${stage >= 1 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine" />
        </div>
      </div>
    </div>
  );
};

// 3D rotation version
export const Rotating3DLogoIntro: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(0.5);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    
    if (hasSeenIntro) {
      setIsVisible(false);
      if (onComplete) onComplete();
      return;
    }

    sessionStorage.setItem('hasSeenIntro', 'true');

    // Animate rotation and scale
    const animationInterval = setInterval(() => {
      setRotation(prev => prev + 2);
      setScale(prev => Math.min(prev + 0.02, 1));
    }, 16);

    // Start fade out
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
      clearInterval(animationInterval);
    }, 2500);

    // Complete animation
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 3000);

    return () => {
      clearInterval(animationInterval);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-gradient-to-br from-blue-950 to-gray-900 flex items-center justify-center transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* 3D container */}
      <div className="relative" style={{ perspective: '1000px' }}>
        <div
          className="relative transition-transform duration-100"
          style={{
            transform: `rotateY(${rotation}deg) scale(${scale})`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Front face */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateZ(50px)' }}>
            <img
              src="https://i.postimg.cc/GpPJZt1P/logo-TC-Avenir-Black.png"
              alt="TrustConstruct"
              className="h-48 w-auto filter drop-shadow-2xl"
            />
          </div>

          {/* Back face */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'rotateY(180deg) translateZ(50px)' }}>
            <img
              src="https://i.postimg.cc/zB0wGQvV/logo-TC.png"
              alt="TrustConstruct"
              className="h-48 w-auto filter drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Reflection */}
        <div 
          className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-30"
          style={{
            transform: `translateX(-50%) rotateY(${rotation}deg) scale(${scale}) scaleY(-0.5)`,
            filter: 'blur(2px)',
          }}
        >
          <img
            src="https://i.postimg.cc/GpPJZt1P/logo-TC-Avenir-Black.png"
            alt=""
            className="h-48 w-auto"
          />
        </div>
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/50 rounded-full animate-float-up"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-10px',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoIntroAnimation;