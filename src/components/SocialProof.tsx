import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Homeowner',
      location: 'Phoenix, AZ',
      rating: 5,
      quote: 'After being burned by a contractor who disappeared with my deposit, TrustConstruct gave me the confidence to renovate again. The escrow system is brilliant.',
      project: 'Bathroom Renovation - $18,500',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'David Chen',
      role: 'Licensed Contractor',
      location: 'San Francisco, CA',
      rating: 5,
      quote: 'I\'ve grown my business 300% since joining TrustConstruct. No more chasing payments or dealing with fake leads. Every project is pre-funded and legitimate.',
      project: 'Kitchen Remodel - $45,000',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Interior Designer',
      location: 'Miami, FL',
      rating: 5,
      quote: 'The milestone system keeps everyone accountable. My clients love the transparency, and I love getting paid on time, every time.',
      project: 'Home Office Design - $12,800',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const logos = [
    { name: 'Better Business Bureau', logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=120' },
    { name: 'Angie\'s List', logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=120' },
    { name: 'HomeAdvisor', logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=120' },
    { name: 'Thumbtack', logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=120' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by thousands of successful projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who've experienced the TrustConstruct difference.
          </p>
        </div>

        {/* Featured Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.quote}</p>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-medium text-blue-600">{testimonial.project}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100 text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-100 text-sm">Project Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24hrs</div>
              <div className="text-blue-100 text-sm">Avg. Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$0</div>
              <div className="text-blue-100 text-sm">Lost to Fraud</div>
            </div>
          </div>
        </div>

        {/* Press & Recognition */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            As featured in leading industry publications
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {logos.map((logo, index) => (
              <div key={index} className="text-gray-500 font-medium">
                {logo.name}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://platform.thetrustconstruct.com"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Join Thousands of Satisfied Users
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;