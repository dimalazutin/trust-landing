// src/components/Whatourusersresaying.tsx
import React, { useRef, useEffect } from 'react'

interface Testimonial {
  name: string
  role: string
  location: string
  quote: string
  iconUrl: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    role: 'Homeowner',
    location: 'Miami, FL',
    quote:
      'I used to worry about paying upfront and getting ghosted. With TheTrustConstruct, my money was protected and the project stayed on track. Total peace of mind.',
    iconUrl: 'https://i.postimg.cc/bv7b7pM9/Sarah-M.png',
  },
  {
    name: 'Jason R.',
    role: 'General Contractor',
    location: 'Austin, TX',
    quote:
      'Finally, a platform that respects contractors. I don’t have to chase payments anymore — TheTrustConstruct protects both sides. It’s how construction should work.',
    iconUrl: 'https://i.postimg.cc/MpXQXnJY/Jason-R-General-Contractor.png',
  },
  {
    name: 'Emily and Daniel P.',
    role: 'Homeowners',
    location: 'Seattle, WA',
    quote:
      'Our kitchen remodel finished on time, on budget, and without stress. The milestone system on TheTrustConstruct made everything so clear. Wish I found this sooner!',
    iconUrl: 'https://i.postimg.cc/J0yfG3KL/Emily-and-Daniel-P.png',
  },
  {
    name: 'Luis G.',
    role: 'Licensed Electrician',
    location: 'Los Angeles, CA',
    quote:
      'TheTrustConstruct helped me grow my business. The verified ratings build real trust with clients, and I only work with serious, pre-funded projects now.',
    iconUrl: 'https://i.postimg.cc/MpJCpQQC/Luis-G-Licensed-Electrician.png',
  },
  {
    name: 'Michael T.',
    role: 'Homeowner',
    location: 'Denver, CO',
    quote:
      'After a bad experience with a fake contractor, I didn’t want to take chances again. TheTrustConstruct gave me tools to choose wisely and stay protected.',
    iconUrl: 'https://i.postimg.cc/wMdrjKth/Michael-T.png',
  },
  {
    name: 'Tasha B.',
    role: 'Remodeling Specialist',
    location: 'Atlanta, GA',
    quote:
      'I love that both sides are accountable. TheTrustConstruct offers real contracts, secure payments, and fast dispute resolution. This platform is changing the game.',
    iconUrl: 'https://i.postimg.cc/c4cJZ0KB/Tasha-B.png',
  },
]

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    containerRef.current?.scrollTo({ left: 0 })
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        What our users are saying
      </h2>

      <div className="overflow-x-auto no-scrollbar px-4 sm:px-8">
        <div
          ref={containerRef}
          className="flex space-x-6 snap-x snap-mandatory"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="snap-center flex-shrink-0 w-full sm:w-80 bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.iconUrl}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover mr-3 flex-shrink-0 border"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {t.name}, {t.role}
                  </p>
                  <p className="text-sm text-gray-600">{t.location}</p>
                </div>
              </div>
              <p className="text-gray-700">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
