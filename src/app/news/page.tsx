'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Page() {
  const newsArticles = [
    {
      id: 1,
      title: "Blockchain Technology Revolutionizes Farm-to-Table Transparency",
      excerpt: "New study shows 40% increase in consumer trust when agricultural products use blockchain tracking systems.",
      category: "Technology",
      readTime: "5 min read",
      date: "2025-09-18",
      image: "/news1.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Indian Farmers Embrace Digital Agriculture with Krishi Cards",
      excerpt: "Government initiative helps 2 million farmers digitize their agricultural records and access better markets.",
      category: "Policy",
      readTime: "3 min read",
      date: "2025-09-17",
      image: "/news2.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Smart Contracts Ensure Fair Pricing for Agricultural Produce",
      excerpt: "Automated payment systems reduce payment delays from 60 days to instant settlements for farmers.",
      category: "Innovation",
      readTime: "4 min read",
      date: "2025-09-16",
      image: "/news3.jpg",
      featured: false
    },
    {
      id: 4,
      title: "QR Code Traceability Reduces Food Fraud by 78%",
      excerpt: "Comprehensive tracking system helps consumers verify authenticity of organic and premium agricultural products.",
      category: "Research",
      readTime: "6 min read",
      date: "2025-09-15",
      image: "/news4.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Sustainable Farming Practices Boost Yields by 25%",
      excerpt: "Integration of traditional methods with blockchain verification shows promising results for environmental impact.",
      category: "Sustainability",
      readTime: "4 min read",
      date: "2025-09-14",
      image: "/news5.jpg",
      featured: false
    },
    {
      id: 6,
      title: "AgriChain Platform Reaches 1 Million Verified Products",
      excerpt: "Milestone achievement demonstrates growing adoption of blockchain technology in agricultural supply chains.",
      category: "Milestone",
      readTime: "2 min read",
      date: "2025-09-13",
      image: "/news6.jpg",
      featured: false
    }
  ];

  const categories = ["All", "Technology", "Policy", "Innovation", "Research", "Sustainability", "Milestone"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-800 p-1">
      <div className="min-h-screen w-full bg-white/95 backdrop-filter backdrop-blur-sm border border-gray-100 shadow-lg rounded-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <header className="p-4 md:p-6 border-b border-gray-100 bg-white/90">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <Link href="/" className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
              <div className="flex items-center">
                <Image src="/globe.svg" alt="Logo" width={24} height={24} className="mr-2" />
                <span className="text-lg font-bold text-gray-800">AgriChain News</span>
              </div>
            </div>
            
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Agricultural Innovation News</h1>
              <p className="text-gray-600 text-sm md:text-base">Stay updated with the latest developments in blockchain agriculture and sustainable farming</p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto p-4 md:p-6">
            
            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      index === 0 
                        ? 'bg-green-700 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Article */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Featured Story</h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-green-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">📰</div>
                        <p className="text-gray-600">Featured Image</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-6 md:p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mr-3">
                        {newsArticles[0].category}
                      </span>
                      <span className="text-gray-500 text-sm">{newsArticles[0].date}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                      {newsArticles[0].title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {newsArticles[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{newsArticles[0].readTime}</span>
                      <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition-colors">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* News Grid */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsArticles.slice(1).map((article) => (
                  <article key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all cursor-pointer">
                    <div className="h-48 bg-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📄</div>
                        <p className="text-gray-500 text-sm">News Image</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium mr-2">
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-xs">{article.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{article.readTime}</span>
                        <button className="text-green-700 hover:text-green-800 font-medium text-sm">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-green-900 rounded-2xl p-6 md:p-8 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Informed</h2>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Get the latest updates on agricultural technology, blockchain innovations, and sustainable farming practices delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300"
                />
                <button className="bg-white text-green-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                Load More Articles
              </button>
            </div>
          </div>
        </main>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 z-50"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Page
