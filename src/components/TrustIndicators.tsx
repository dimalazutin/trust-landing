import React from 'react';
import { Shield, Users, DollarSign, Clock, Award, CheckCircle } from 'lucide-react';

const TrustIndicators: React.FC = () => {
  const indicators = [
    {
      icon: Shield,
      value: '$2.5M+',
      label: 'Protected in Escrow',
      description: 'Total funds secured'
    },
    {
      icon: Users,
      value: '1,200+',
      label: 'Verified Contractors',
      description: 'Licensed professionals'
    },
    {
      icon: CheckCircle,
      value: '850+',
      label: 'Projects Completed',
      description: 'Successfully delivered'
    },
    {
      icon: Clock,
      value: '24hrs',
      label: 'Average Response',
      description: 'Support response time'
    },
    {
      icon: Award,
      value: '4.9/5',
      label: 'Client Satisfaction',
      description: 'Average rating'
    },
    {
      icon: DollarSign,
      value: '0%',
      label: 'Payment Disputes',
      description: 'Unresolved cases'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by thousands across America
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real numbers from real projects. See why contractors and clients choose TrustConstruct for secure, reliable project management.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {indicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{item.value}</div>
                <div className="text-sm font-semibold text-gray-700 mb-1">{item.label}</div>
                <div className="text-xs text-gray-500">{item.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;