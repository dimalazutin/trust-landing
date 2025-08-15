// src/components/BlogResourcesSection.tsx
import React from 'react'

interface Article {
  id: number
  title: string
  description: string
  url: string
}

const articles: Article[] = [
  {
    id: 1,
    title: '10 Tips for Secure Payments',
    description:
      'Learn how to keep your transactions safe and reliable. From choosing the right contractor to using escrow - here are ten proven ways to make sure your money is protected during any construction project.',
    url: 'https://buildertrend.com/blog/construction-payments-strategy/',
  },
  {
    id: 2,
    title: 'Managing Milestone Contracts',
    description:
      'Step-by-step guide to structuring your projects. Milestones help break work into phases - but only if done right. Learn how to set realistic checkpoints, manage expectations, and tie payments to real progress.',
    url: 'https://legittai.com/blog/contract-milestone',
  },
  {
    id: 3,
    title: 'Legal Aspects in Construction',
    description:
      'Understand your rights and obligations. Avoid costly mistakes. We break down the basics of construction law, contracts, liability, and how TheTrustConstruct helps you stay protected - without paying $500/hour for a lawyer.',
    url: 'https://iclg.com/practice-areas/construction-and-engineering-law-laws-and-regulations/usa',
  },
  {
    id: 4,
    title: 'How Escrow Protects Everyone',
    description:
      'Why TheTrustConstruct uses escrow for every job. We explain how our escrow system prevents fraud, builds trust, and ensures no one gets paid unless both sides are satisfied. Real protection, not just promises.',
    url: 'https://blog.cscglobal.com/how-do-escrow-services-provide-security-and-structure-in-real-estate-and-construction-transactions/',
  },
  {
    id: 5,
    title: 'Red Flags When Hiring Contractors',
    description:
      'What to watch for before signing anything. Ghosting, vague quotes, no license - if you\'ve seen it, we\'ve listed it. This article shows you how to identify warning signs early and how TheTrustConstruct filters out the worst.',
    url: 'https://cillessenconstruction.com/hiring-a-contractor-10-red-flags-to-watch-for/',
  },
  {
    id: 6,
    title: 'The Power of Verified Ratings',
    description:
      'Why reputation matters more than a price tag. Our rating system is based on verified completed projects, not fake reviews. Learn how transparency in performance history helps both contractors and clients choose better.',
    url: 'https://www.mckissock.com/blog/appraisal/understanding-uad-quality-ratings/',
  },
]

export default function BlogResourcesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Resources & Insights
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article
              key={a.id}
              className="flex flex-col h-full p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {a.title}
              </h3>
              <p className="text-gray-600 flex-grow">{a.description}</p>
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 hover:underline font-medium"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}