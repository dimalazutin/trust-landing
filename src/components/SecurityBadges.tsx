import React from 'react';
import { Shield, Lock, Award, CheckCircle, FileCheck, CreditCard } from 'lucide-react';

const SecurityBadges: React.FC = () => {
  const badges = [
    {
      icon: Shield,
      title: "FDIC Insured Escrow",
      description: "Your funds are protected by federal insurance",
      color: "bg-green-100 text-green-800"
    },
    {
      icon: Lock,
      title: "256-bit SSL Encryption",
      description: "Bank-level security for all transactions",
      color: "bg-blue-100 text-blue-800"
    },
    {
      icon: Award,
      title: "Licensed & Bonded",
      description: "All contractors verified and insured",
      color: "bg-purple-100 text-purple-800"
    },
    {
      icon: CheckCircle,
      title: "SOC 2 Compliant",
      description: "Audited security and privacy controls",
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      icon: FileCheck,
      title: "Legal Contracts",
      description: "Enforceable milestone agreements",
      color: "bg-orange-100 text-orange-800"
    },
    {
      icon: CreditCard,
      title: "PCI DSS Certified",
      description: "Secure payment card processing",
      color: "bg-red-100 text-red-800"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your projects and payments are protected by the same security standards used by major financial institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${badge.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{badge.title}</h3>
                <p className="text-gray-600 text-sm">{badge.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-green-600" />
              <span>99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center">
              <Lock className="w-4 h-4 mr-2 text-blue-600" />
              <span>Zero Data Breaches</span>
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2 text-purple-600" />
              <span>A+ Security Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityBadges;