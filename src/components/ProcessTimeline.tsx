import React from 'react';
import { FileText, Users, Check, CreditCard, Hammer, CheckCircle, Banknote } from 'lucide-react';

const ProcessTimeline: React.FC = () => {
  const steps = [
    { icon: FileText, title: "Post", description: "Create project" },
    { icon: Users, title: "Bid", description: "Receive proposals" },
    { icon: Check, title: "Contract", description: "Sign milestone contract" },
    { icon: CreditCard, title: "Escrow", description: "Fund escrow" },
    { icon: Hammer, title: "Work", description: "Complete tasks" },
    { icon: CheckCircle, title: "Approve", description: "Verify quality" },
    { icon: Banknote, title: "Paid", description: "Release funds" }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-black">
          How TrustConstruct solves it
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-7 gap-4">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="flex items-center space-x-4 lg:block text-center">
              <Icon className="h-10 w-10 text-navy mb-2 lg:mb-4" />
              <div>
                <h3 className="font-semibold text-black">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProcessTimeline;
