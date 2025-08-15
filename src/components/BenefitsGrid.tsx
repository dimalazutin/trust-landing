// src/components/DifferentiatorsSection.tsx
import React from 'react'

interface Differentiator {
  id: number
  icon: string
  title: string
  description: string
}

const differentiators: Differentiator[] = [
  {
    id: 1,
    icon: '💸',
    title: 'No lead fees',
    description: 'Contractors keep 100% of their earnings with no upfront lead costs.',
  },
  {
    id: 2,
    icon: '📄',
    title: 'Built-in contracts',
    description: 'Milestone-based contracts enforce clear terms throughout the project.',
  },
  {
    id: 3,
    icon: '✅',
    title: 'Verified pros',
    description: 'All professionals are vetted and rated based on real completed jobs.',
  },
  {
    id: 4,
    icon: '🛡',
    title: 'Escrow security',
    description:
      'Funds are held securely until work is approved by the client — no surprises.',
  },
  {
    id: 5,
    icon: '🧾',
    title: 'Instant invoices & estimates',
    description:
      'Create accurate invoices and project estimates using our built-in calculator tools.',
  },
  {
    id: 6,
    icon: '📑',
    title: 'Proof of subcontractor payment',
    description:
      'Get downloadable confirmation of each payment — protecting clients from mechanic’s liens.',
  },
  {
    id: 7,
    icon: '🧷',
    title: 'Licenses & insurance transparency',
    description:
      'View all licenses, liability coverage, and insurance info directly on the pro’s profile.',
  },
  {
    id: 8,
    icon: '📊',
    title: 'Project history & performance insights',
    description:
      'Access a contractor’s real performance — see completed milestones, disputes, and satisfaction scores.',
  },
]

export default function DifferentiatorsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          What makes us different
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="flex flex-col items-start p-6 bg-white rounded-lg shadow hover:shadow-md transition"
            >
              <div className="text-4xl">{icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {title}
              </h3>
              <p className="mt-2 text-gray-600 flex-grow">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
