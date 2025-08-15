import React, { useState } from 'react';
import { Play, Pause, RotateCcw, ArrowRight, CheckCircle, DollarSign, FileText, Users } from 'lucide-react';

const InteractiveDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    {
      title: "Client Posts Project",
      description: "Sarah needs her kitchen remodeled. She creates a detailed project with photos, requirements, and budget.",
      visual: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: FileText,
      color: "bg-blue-500"
    },
    {
      title: "Contractors Submit Bids",
      description: "Licensed contractors review the project and submit detailed proposals with timelines and pricing.",
      visual: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: Users,
      color: "bg-green-500"
    },
    {
      title: "Contract & Escrow Setup",
      description: "Sarah chooses Mike's proposal. They sign a milestone contract and Sarah funds the first milestone in escrow.",
      visual: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: CheckCircle,
      color: "bg-purple-500"
    },
    {
      title: "Work Begins Safely",
      description: "Mike starts work knowing payment is secured. Sarah tracks progress through milestone updates.",
      visual: "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: DollarSign,
      color: "bg-orange-500"
    }
  ];

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const reset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See TrustConstruct in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow Sarah and Mike through a real kitchen remodel project to see how our platform protects both parties every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual Demo */}
          <div className="relative">
            <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={steps[currentStep].visual}
                alt={steps[currentStep].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white mb-3 ${steps[currentStep].color}`}>
                  {React.createElement(steps[currentStep].icon, { className: "w-4 h-4 mr-2" })}
                  Step {currentStep + 1} of {steps.length}
                </div>
                <h3 className="text-xl font-bold mb-2">{steps[currentStep].title}</h3>
                <p className="text-gray-200 text-sm">{steps[currentStep].description}</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center mt-6 space-x-4">
              <button
                onClick={togglePlay}
                className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                {isPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
                {isPlaying ? 'Pause' : 'Play Demo'}
              </button>
              <button
                onClick={reset}
                className="flex items-center px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Reset
              </button>
            </div>
          </div>

          {/* Step Navigation */}
          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    currentStep === index
                      ? 'bg-blue-600 shadow-lg scale-105'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                      currentStep === index ? 'bg-white/20' : 'bg-gray-700'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{step.title}</h4>
                      <p className={`text-sm ${
                        currentStep === index ? 'text-blue-100' : 'text-gray-400'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                    {currentStep === index && (
                      <ArrowRight className="w-5 h-5 text-blue-200" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://platform.thetrustconstruct.com"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Project Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;