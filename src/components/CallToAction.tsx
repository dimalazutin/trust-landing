import React from "react";
import { ArrowRight } from "lucide-react";

const CallToAction: React.FC = () => {
  const handleTryTrust = () => {
    window.open(
      "https://platform.thetrustconstruct.com",
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-navy relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready to build with trust?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of contractors and clients who have chosen security,
          transparency, and reliability.
        </p>
        <button
          onClick={handleTryTrust}
          className="inline-flex items-center px-8 py-4 bg-white text-navy font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
        >
          <span className="mr-2">Try Trust</span>
          <ArrowRight className="h-5 w-5" />
        </button>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white/90">
          <div>Free to get started</div>
          <div>No setup fees</div>
          <div>24/7 support</div>
          <div>Escrow-backed security</div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
