'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function page() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'All', icon: '🏪', count: '50,000+' },
    { name: 'Seeds & Fertilizers', icon: '🌱', count: '12,000+' },
    { name: 'Agricultural Tools', icon: '🚜', count: '8,500+' },
    { name: 'Fresh Produce', icon: '🥕', count: '15,000+' },
    { name: 'Livestock', icon: '🐄', count: '3,200+' },
    { name: 'Irrigation Equipment', icon: '💧', count: '5,800+' },
    { name: 'Storage Solutions', icon: '🏢', count: '2,100+' },
    { name: 'Organic Products', icon: '🌿', count: '7,400+' }
  ];

  const products = [
    {
      id: 1,
      title: 'Premium Organic Wheat Seeds - Certified',
      price: '₹2,500',
      unit: 'per 25kg bag',
      supplier: 'GreenFields Agricultural Pvt Ltd',
      location: 'Punjab, India',
      rating: 4.8,
      reviews: 156,
      verified: true,
      minOrder: '10 bags',
      blockchain: true,
      category: 'Seeds & Fertilizers'
    },
    {
      id: 2,
      title: 'Advanced Drip Irrigation System',
      price: '₹45,000',
      unit: 'per acre setup',
      supplier: 'AquaTech Solutions',
      location: 'Maharashtra, India',
      rating: 4.9,
      reviews: 89,
      verified: true,
      minOrder: '1 unit',
      blockchain: true,
      category: 'Irrigation Equipment'
    },
    {
      id: 3,
      title: 'Fresh Organic Tomatoes - Grade A',
      price: '₹35',
      unit: 'per kg',
      supplier: 'Sunrise Organic Farms',
      location: 'Karnataka, India',
      rating: 4.7,
      reviews: 234,
      verified: true,
      minOrder: '100 kg',
      blockchain: true,
      category: 'Fresh Produce'
    },
    {
      id: 4,
      title: 'John Deere Tractor - 5050D Model',
      price: '₹8,50,000',
      unit: 'per unit',
      supplier: 'AgriMachinery Hub',
      location: 'Haryana, India',
      rating: 4.6,
      reviews: 45,
      verified: true,
      minOrder: '1 unit',
      blockchain: false,
      category: 'Agricultural Tools'
    },
    {
      id: 5,
      title: 'Holstein Friesian Dairy Cows',
      price: '₹75,000',
      unit: 'per cow',
      supplier: 'Premium Livestock Farm',
      location: 'Gujarat, India',
      rating: 4.9,
      reviews: 67,
      verified: true,
      minOrder: '2 cows',
      blockchain: true,
      category: 'Livestock'
    },
    {
      id: 6,
      title: 'Cold Storage Warehouse Space',
      price: '₹15',
      unit: 'per sq ft/month',
      supplier: 'ColdChain Solutions Ltd',
      location: 'Delhi, India',
      rating: 4.5,
      reviews: 123,
      verified: true,
      minOrder: '1000 sq ft',
      blockchain: true,
      category: 'Storage Solutions'
    },
    {
      id: 7,
      title: 'Organic Neem-based Pesticide',
      price: '₹850',
      unit: 'per 5L bottle',
      supplier: 'BioProtect Organics',
      location: 'Tamil Nadu, India',
      rating: 4.8,
      reviews: 178,
      verified: true,
      minOrder: '10 bottles',
      blockchain: true,
      category: 'Organic Products'
    },
    {
      id: 8,
      title: 'Smart Soil Moisture Sensors',
      price: '₹3,200',
      unit: 'per sensor',
      supplier: 'AgriTech Innovations',
      location: 'Bangalore, India',
      rating: 4.7,
      reviews: 91,
      verified: true,
      minOrder: '5 sensors',
      blockchain: true,
      category: 'Agricultural Tools'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.supplier.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Top Navigation */}
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm">Back to AgriChain</span>
            </Link>
            <div className="flex items-center space-x-4">
              <button className="text-sm text-gray-600 hover:text-green-600">Sell on AgriMART</button>
              <button className="text-sm text-gray-600 hover:text-green-600">Help</button>
              <Link href="/login" className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">
                Sign In
              </Link>
            </div>
          </div>

          {/* Main Header */}
          <div className="py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <Image src="/globe.svg" alt="Logo" width={32} height={32} className="mr-3" />
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Agri<span className="text-green-600">MART</span>
                  </h1>
                  <p className="text-sm text-gray-600">India&apos;s Largest Agricultural Marketplace</p>
                </div>
              </div>
              
              {/* Search Bar */}
              <div className="flex-1 max-w-2xl md:mx-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for agricultural products, suppliers, services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-4 top-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Sidebar - Categories */}
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                      selectedCategory === category.name 
                        ? 'bg-green-100 text-green-700 border border-green-200' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="mr-3 text-lg">{category.icon}</span>
                      <span className="text-sm font-medium">{category.name}</span>
                    </div>
                    <span className="text-xs text-gray-500">{category.count}</span>
                  </button>
                ))}
              </div>
              
              {/* Quick Stats */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-bold text-gray-800 mb-3">Platform Stats</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Verified Suppliers</span>
                    <span className="font-medium">25,000+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Products Listed</span>
                    <span className="font-medium">2,50,000+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Blockchain Verified</span>
                    <span className="font-medium text-green-600">85%</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content - Products */}
          <main className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {selectedCategory === 'All' ? 'All Products' : selectedCategory}
                </h2>
                <p className="text-sm text-gray-600">{filteredProducts.length} products found</p>
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <select className="px-3 py-2 border border-gray-300 rounded text-sm">
                  <option>Sort by: Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  {/* Product Image */}
                  <div className="h-48 bg-gray-100 rounded-t-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📦</div>
                      <p className="text-gray-500 text-sm">Product Image</p>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-sm font-medium text-gray-800 line-clamp-2 flex-1">
                        {product.title}
                      </h3>
                      {product.blockchain && (
                        <span className="ml-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                          🔗 Verified
                        </span>
                      )}
                    </div>
                    
                    <div className="mb-3">
                      <div className="flex items-baseline">
                        <span className="text-lg font-bold text-gray-800">{product.price}</span>
                        <span className="text-sm text-gray-500 ml-1">/ {product.unit}</span>
                      </div>
                      <p className="text-xs text-gray-600">Min. Order: {product.minOrder}</p>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-sm font-medium text-gray-800">{product.supplier}</p>
                      <p className="text-xs text-gray-600 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {product.location}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <span className="text-yellow-400">★</span>
                          <span className="text-sm font-medium ml-1">{product.rating}</span>
                        </div>
                        <span className="text-xs text-gray-500 ml-2">({product.reviews} reviews)</span>
                      </div>
                      {product.verified && (
                        <span className="text-green-600 text-xs flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Verified
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded text-sm hover:bg-green-700 transition-colors">
                        Contact Supplier
                      </button>
                      <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded text-sm hover:bg-gray-50 transition-colors">
                        ♡
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                Load More Products
              </button>
            </div>
          </main>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 space-y-3">
        <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default page