import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How quickly can I start using TrustConstruct?",
          answer: "You can create an account and start posting projects or bidding within minutes. For contractors, we verify licenses and insurance within 24-48 hours. Once verified, you're ready to work on funded projects immediately."
        },
        {
          question: "What types of projects work best on TrustConstruct?",
          answer: "Any construction, renovation, or home improvement project from $1,000 to $500,000+. This includes kitchen remodels, bathroom renovations, roofing, electrical work, plumbing, landscaping, and new construction."
        },
        {
          question: "Do I need special software or training?",
          answer: "No. TrustConstruct works in any web browser. Our interface is intuitive, and we provide step-by-step guidance. Most users are comfortable within their first project."
        }
      ]
    },
    {
      category: "Security & Payments",
      questions: [
        {
          question: "How does escrow actually protect my money?",
          answer: "When you fund a milestone, your money goes into a secure, FDIC-insured escrow account managed by our licensed partner. The contractor cannot access these funds until you approve their work. If there's a dispute, funds remain protected until resolution."
        },
        {
          question: "What happens if a contractor doesn't complete the work?",
          answer: "Your money stays in escrow until work is completed to your satisfaction. If a contractor abandons the project, you get a full refund. Our dispute resolution team helps mediate issues and can recommend replacement contractors."
        },
        {
          question: "Are there any hidden fees I should know about?",
          answer: "No hidden fees. Clients pay nothing. Contractors pay a simple 0.5% fee only when they successfully complete milestones and get paid. No lead fees, no monthly subscriptions, no surprise charges."
        }
      ]
    },
    {
      category: "For Contractors",
      questions: [
        {
          question: "How is this different from paying for leads on other platforms?",
          answer: "We don't sell leads. Every project you see is from a real client with money already in escrow. No fake requests, no competition with 20+ other contractors, no upfront costs. You only pay when you actually get paid."
        },
        {
          question: "What if a client refuses to pay after I complete the work?",
          answer: "This is exactly why we use milestone contracts and escrow. The money is already secured before you start work. If there's a legitimate dispute, our resolution process protects contractors from unfair non-payment."
        },
        {
          question: "Can I bring my existing clients to the platform?",
          answer: "Absolutely! Many contractors invite their existing clients to use TrustConstruct for the added security and professional milestone management. Both parties benefit from the protection and transparency."
        }
      ]
    },
    {
      category: "Legal & Compliance",
      questions: [
        {
          question: "Are the contracts legally binding?",
          answer: "Yes. Our milestone contracts are legally enforceable agreements that clearly define scope, timeline, payment terms, and responsibilities. They're designed by legal experts and comply with state construction laws."
        },
        {
          question: "What licenses and insurance do contractors need?",
          answer: "Requirements vary by state and project type. Generally, contractors need current business licenses, trade-specific licenses where required, and general liability insurance. We verify all credentials before approval."
        },
        {
          question: "How do you handle disputes and what's the process?",
          answer: "Our structured dispute resolution includes: 1) Direct communication facilitation, 2) Mediation by neutral experts, 3) Evidence review (photos, contracts, communications), 4) Binding decision if needed. Most disputes resolve quickly and fairly."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const index = categoryIndex * 100 + questionIndex;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about TrustConstruct. Can't find what you're looking for? Our support team is here to help.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-gray-100 px-6 py-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {category.questions.map((faq, questionIndex) => {
                  const index = categoryIndex * 100 + questionIndex;
                  const isOpen = openIndex === index;
                  
                  return (
                    <div key={questionIndex}>
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-medium text-gray-900 pr-4">
                            {faq.question}
                          </h4>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@thetrustconstruct.com"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Email Support
            </a>
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;