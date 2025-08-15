import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react';

const ROICalculator: React.FC = () => {
  const [projectValue, setProjectValue] = useState(25000);
  const [platform, setPlatform] = useState<'trustconstruct' | 'traditional'>('trustconstruct');

  const calculateSavings = () => {
    const trustConstructFee = projectValue * 0.005; // 0.5%
    const traditionalLeadCosts = 150; // Average lead cost
    const traditionalPlatformFee = projectValue * 0.03; // 3% typical
    const disputeRisk = projectValue * 0.05; // 5% risk of payment issues
    
    const trustConstructTotal = trustConstructFee;
    const traditionalTotal = traditionalLeadCosts + traditionalPlatformFee + disputeRisk;
    
    return {
      trustConstruct: trustConstructTotal,
      traditional: traditionalTotal,
      savings: traditionalTotal - trustConstructTotal,
      savingsPercent: ((traditionalTotal - trustConstructTotal) / traditionalTotal) * 100
    };
  };

  const results = calculateSavings();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Calculate Your Savings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how much you can save by choosing TrustConstruct over traditional platforms with lead fees and hidden costs.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Value
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  value={projectValue}
                  onChange={(e) => setProjectValue(Number(e.target.value))}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  min="1000"
                  max="500000"
                  step="1000"
                />
              </div>
              <div className="mt-4">
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  value={projectValue}
                  onChange={(e) => setProjectValue(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$1K</span>
                  <span>$100K</span>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-green-800">TrustConstruct</span>
                  <span className="text-lg font-bold text-green-900">
                    ${results.trustConstruct.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-green-600 mt-1">0.5% platform fee only</p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-red-800">Traditional Platforms</span>
                  <span className="text-lg font-bold text-red-900">
                    ${results.traditional.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-red-600 mt-1">Lead fees + platform fees + dispute risk</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-blue-800">Your Savings</span>
                  </div>
                  <span className="text-xl font-bold text-blue-900">
                    ${results.savings.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-blue-600 mt-1">
                  {results.savingsPercent.toFixed(1)}% cost reduction
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-yellow-800 mb-1">
                  Traditional Platform Hidden Costs Include:
                </h4>
                <ul className="text-xs text-yellow-700 space-y-1">
                  <li>• Lead fees: $15-300 per lead (no guarantee of conversion)</li>
                  <li>• Platform fees: 2-5% of project value</li>
                  <li>• Payment dispute risk: 5-10% of projects face payment issues</li>
                  <li>• No escrow protection for contractors</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://platform.thetrustconstruct.com"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Saving Today
              <DollarSign className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;