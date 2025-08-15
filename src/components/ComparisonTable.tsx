import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  const rows = [
    { feature: 'Lead fees', trust: 'None', other: '$15–75 per lead' },
    { feature: 'Built-in contracts', trust: 'Milestone-based', other: 'Not provided' },
    { feature: 'Payment protection', trust: 'Escrow-backed', other: 'Limited/None' },
    { feature: 'Dispute resolution', trust: 'Structured process', other: 'Limited support' },
    { feature: 'Transaction fee', trust: 'from 0.5% on completion', other: 'Varies + lead fees' },
  ];

  return (
    <section id="comparison" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          How TrustConstruct compares
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                {['Feature', 'TrustConstruct', 'Other Platforms'].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left font-semibold whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(({ feature, trust, other }) => (
                <tr key={feature} className="border-t">
                  <td className="px-4 py-3 whitespace-nowrap">{feature}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {trust.startsWith('$') ? (
                      trust
                    ) : (
                      <span className="inline-flex items-center space-x-1">
                        <Check className="text-blue-600" size={16} />
                        <span>{trust}</span>
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {other.startsWith('$') ? (
                      other
                    ) : (
                      <span className="inline-flex items-center space-x-1">
                        <X className="text-red-500" size={16} />
                        <span>{other}</span>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
