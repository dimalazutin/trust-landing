import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';

interface NewsPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  readTime: number;
}

const NewsPage: React.FC = () => {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<NewsPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  // Mock data - in a real app, this would come from your content management system
  const mockPosts: NewsPost[] = [
    {
      id: '1',
      title: 'TrustConstruct Launches Enhanced Escrow Protection',
      excerpt: 'New security features provide even stronger protection for both contractors and clients, with instant dispute resolution and automated milestone tracking.',
      content: 'Full article content would go here...',
      date: '2025-01-15',
      author: 'TrustConstruct Team',
      category: 'Product Updates',
      tags: ['escrow', 'security', 'features'],
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: 3
    },
    {
      id: '2',
      title: 'Construction Industry Trends: What to Expect in 2025',
      excerpt: 'From digital payments to AI-powered project management, discover the trends shaping the future of construction and home improvement.',
      content: 'Full article content would go here...',
      date: '2025-01-12',
      author: 'Sarah Johnson',
      category: 'Industry News',
      tags: ['trends', '2025', 'technology'],
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: 5
    },
    {
      id: '3',
      title: 'How to Avoid Common Contractor Scams',
      excerpt: 'Protect yourself from fraudulent contractors with these essential tips. Learn the warning signs and how TrustConstruct helps prevent scams.',
      content: 'Full article content would go here...',
      date: '2025-01-10',
      author: 'Mike Rodriguez',
      category: 'Safety Tips',
      tags: ['safety', 'scams', 'tips'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: 4
    },
    {
      id: '4',
      title: 'Success Story: $50K Kitchen Remodel Completed Seamlessly',
      excerpt: 'Read how the Johnson family transformed their kitchen using TrustConstruct\'s milestone-based payment system with zero disputes.',
      content: 'Full article content would go here...',
      date: '2025-01-08',
      author: 'Emily Chen',
      category: 'Success Stories',
      tags: ['success', 'kitchen', 'remodel'],
      image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: 6
    },
    {
      id: '5',
      title: 'New Partnership with Leading Insurance Providers',
      excerpt: 'TrustConstruct announces strategic partnerships to provide comprehensive coverage for all platform users.',
      content: 'Full article content would go here...',
      date: '2025-01-05',
      author: 'TrustConstruct Team',
      category: 'Company News',
      tags: ['partnership', 'insurance', 'coverage'],
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600',
      readTime: 2
    }
  ];

  useEffect(() => {
    // Simulate loading posts
    setTimeout(() => {
      setPosts(mockPosts);
      setFilteredPosts(mockPosts);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let filtered = posts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory, posts]);

  const categories = ['all', ...Array.from(new Set(posts.map(post => post.category)))];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-8"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="h-48 bg-gray-300 rounded mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">News & Updates</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest news, product updates, and insights from TrustConstruct.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                {post.image && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime} min read
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-gray-400" />
                      <div className="flex gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="text-xs text-gray-500">+{post.tags.length - 2}</span>
                        )}
                      </div>
                    </div>
                    
                    <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">By {post.author}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Load More Button (for pagination) */}
        {filteredPosts.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;