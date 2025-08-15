import React from 'react';
import { DollarSign, ShieldOff, XCircle, Lock } from 'lucide-react';

const ProblemCards: React.FC = () => {
  const problems = [
    {
      icon: DollarSign,
      title: "High lead costs",
      description: "Platforms charge $15–$300 per lead without guaranteed results."
    },
    {
      icon: ShieldOff,
      title: "No guarantees",
      description: "Contacts may never convert into real projects."
    },
    {
      icon: XCircle,
      title: "No dispute resolution",
      description: "No structured process to resolve issues fairly."
    },
    {
      icon: Lock,
      title: "No payment protection",
      description: "Funds aren’t secured — contractors risk non-payment."
    }
  ];

  return (
    <section id="problems" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Why traditional platforms fail
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-navy" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemCards;
