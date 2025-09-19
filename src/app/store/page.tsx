'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  stock: number;
  sold: number;
  status: 'active' | 'inactive' | 'pending';
  verified: boolean;
  dateAdded: string;
  revenue: number;
  views: number;
}

interface Analytics {
  totalProducts: number;
  activeListings: number;
  totalRevenue: number;
  ordersToday: number;
  viewsThisWeek: number;
  monthlyGrowth: number;
}

function page() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock seller data
  const sellerInfo = {
    name: 'Rajesh Kumar',
    businessName: 'Kumar Organic Farms',
    location: 'Pune, Maharashtra',
    memberSince: '2024-01-15',
    rating: 4.8,
    totalSales: 1247,
    krishiCardId: 'KC-MH-2024-001234',
    verificationStatus: 'verified'
  };

  const analytics: Analytics = {
    totalProducts: 24,
    activeListings: 18,
    totalRevenue: 245750,
    ordersToday: 12,
    viewsThisWeek: 1456,
    monthlyGrowth: 15.2
  };

  const categories = ['All', 'Seeds', 'Vegetables', 'Fruits', 'Grains', 'Fertilizers', 'Tools'];

  const myProducts: Product[] = [
    {
      id: 1,
      name: 'Organic Wheat Seeds (Premium Quality)',
      price: 2499,
      originalPrice: 2999,
      image: '/wheat-seeds.jpg',
      category: 'Seeds',
      stock: 45,
      sold: 156,
      status: 'active',
      verified: true,
      dateAdded: '2025-08-15',
      revenue: 389844,
      views: 1247
    },
    {
      id: 2,
      name: 'Fresh Organic Tomatoes',
      price: 80,
      originalPrice: 120,
      image: '/tomatoes.jpg',
      category: 'Vegetables',
      stock: 0,
      sold: 89,
      status: 'inactive',
      verified: true,
      dateAdded: '2025-09-01',
      revenue: 7120,
      views: 456
    },
    {
      id: 3,
      name: 'Homemade Organic Compost',
      price: 899,
      originalPrice: 1199,
      image: '/compost.jpg',
      category: 'Fertilizers',
      stock: 25,
      sold: 234,
      status: 'active',
      verified: true,
      dateAdded: '2025-07-20',
      revenue: 210366,
      views: 892
    },
    {
      id: 4,
      name: 'Basmati Rice (Premium Grade)',
      price: 3499,
      originalPrice: 4299,
      image: '/rice.jpg',
      category: 'Grains',
      stock: 12,
      sold: 67,
      status: 'active',
      verified: false,
      dateAdded: '2025-09-10',
      revenue: 234433,
      views: 723
    },
    {
      id: 5,
      name: 'Seasonal Mixed Vegetables Box',
      price: 599,
      originalPrice: 799,
      image: '/veg-box.jpg',
      category: 'Vegetables',
      stock: 8,
      sold: 298,
      status: 'active',
      verified: true,
      dateAdded: '2025-06-05',
      revenue: 178502,
      views: 1834
    }
  ];

  const filteredProducts = myProducts.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  const recentOrders = [
    { id: '#ORD-001', product: 'Organic Wheat Seeds', quantity: 2, amount: 4998, status: 'delivered', date: '2025-09-20' },
    { id: '#ORD-002', product: 'Fresh Organic Tomatoes', quantity: 5, amount: 400, status: 'pending', date: '2025-09-20' },
    { id: '#ORD-003', product: 'Organic Compost', quantity: 1, amount: 899, status: 'shipped', date: '2025-09-19' },
    { id: '#ORD-004', product: 'Basmati Rice', quantity: 3, amount: 10497, status: 'processing', date: '2025-09-19' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-800 p-1">
      <div className="min-h-screen w-full bg-white/95 backdrop-filter backdrop-blur-sm border border-gray-100 shadow-lg rounded-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <header className="p-4 md:p-6 border-b border-gray-100 bg-white/90">
          <div className="flex items-center justify-between">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
            <div className="flex items-center">
              <Image src="/globe.svg" alt="Logo" width={24} height={24} className="mr-2" />
              <span className="text-lg font-bold text-gray-800">Seller Dashboard</span>
            </div>
          </div>
        </header>

        {/* Seller Profile Section */}
        <section className="p-4 md:p-6 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                
                {/* Seller Info */}
                <div className="lg:w-1/3">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">👨‍🌾</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">{sellerInfo.name}</h2>
                    <p className="text-gray-600">{sellerInfo.businessName}</p>
                    <div className="flex items-center justify-center mt-2">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified Seller
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium">{sellerInfo.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Member Since:</span>
                      <span className="font-medium">{new Date(sellerInfo.memberSince).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating:</span>
                      <span className="font-medium flex items-center">
                        {sellerInfo.rating} <span className="text-yellow-400 ml-1">★</span>
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Sales:</span>
                      <span className="font-medium">{sellerInfo.totalSales}</span>
                    </div>
                  </div>
                </div>

                {/* Analytics Cards */}
                <div className="lg:w-2/3">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Business Analytics</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm opacity-90">Total Revenue</span>
                        <span className="text-2xl">💰</span>
                      </div>
                      <div className="text-2xl font-bold">₹{analytics.totalRevenue.toLocaleString()}</div>
                      <div className="text-sm opacity-90">+{analytics.monthlyGrowth}% this month</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm opacity-90">Active Products</span>
                        <span className="text-2xl">📦</span>
                      </div>
                      <div className="text-2xl font-bold">{analytics.activeListings}</div>
                      <div className="text-sm opacity-90">of {analytics.totalProducts} total</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm opacity-90">Orders Today</span>
                        <span className="text-2xl">🛒</span>
                      </div>
                      <div className="text-2xl font-bold">{analytics.ordersToday}</div>
                      <div className="text-sm opacity-90">{analytics.viewsThisWeek} views this week</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-medium text-gray-800 mb-3">Quick Actions</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={() => setShowAddProduct(true)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                      >
                        + Add Product
                      </button>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                        View Orders
                      </button>
                      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm">
                        Analytics
                      </button>
                      <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm">
                        Settings
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Preview Section */}
        <section className="p-4 md:p-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">Product Preview</h3>
                <p className="text-sm text-gray-600">See how your products appear to customers</p>
              </div>
              
              {/* Featured Product Preview */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Latest Product */}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4">
                  <h4 className="font-medium text-gray-800 mb-4">Latest Product</h4>
                  <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                    <div className="h-32 bg-gray-100 flex items-center justify-center relative">
                      <div className="text-center">
                        <div className="text-3xl mb-1">📦</div>
                        <p className="text-gray-500 text-xs">Product Image</p>
                      </div>
                      
                      {/* Badges */}
                      <div className="absolute top-2 left-2 space-y-1">
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                          🔗 Verified
                        </span>
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                          -19%
                        </span>
                      </div>
                    </div>

                    <div className="p-3">
                      <h5 className="font-medium text-gray-800 text-sm mb-1">
                        {myProducts[0]?.name || 'Your Latest Product'}
                      </h5>
                      
                      <div className="flex items-center mb-2">
                        <span className="text-yellow-400 text-sm">★</span>
                        <span className="text-xs text-gray-600 ml-1">4.8</span>
                        <span className="text-xs text-gray-500 ml-1">(156)</span>
                      </div>

                      <div className="flex items-baseline mb-2">
                        <span className="text-sm font-bold text-gray-900">₹{myProducts[0]?.price.toLocaleString() || '0'}</span>
                        <span className="text-xs text-gray-500 line-through ml-2">₹{myProducts[0]?.originalPrice.toLocaleString() || '0'}</span>
                      </div>

                      <button className="w-full bg-green-600 text-white py-1.5 px-3 rounded-lg hover:bg-green-700 transition-colors text-xs font-medium">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>

                {/* Best Selling Product */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-4">
                  <h4 className="font-medium text-gray-800 mb-4">Best Seller</h4>
                  <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                    <div className="h-32 bg-gray-100 flex items-center justify-center relative">
                      <div className="text-center">
                        <div className="text-3xl mb-1">🏆</div>
                        <p className="text-gray-500 text-xs">Top Product</p>
                      </div>
                      
                      {/* Bestseller Badge */}
                      <div className="absolute top-2 left-2">
                        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                          Bestseller
                        </span>
                      </div>
                    </div>

                    <div className="p-3">
                      <h5 className="font-medium text-gray-800 text-sm mb-1">
                        {myProducts.find(p => p.sold > 200)?.name || 'Seasonal Mixed Vegetables Box'}
                      </h5>
                      
                      <div className="flex items-center mb-2">
                        <span className="text-yellow-400 text-sm">★</span>
                        <span className="text-xs text-gray-600 ml-1">4.9</span>
                        <span className="text-xs text-gray-500 ml-1">(298)</span>
                      </div>

                      <div className="flex items-baseline mb-2">
                        <span className="text-sm font-bold text-gray-900">₹599</span>
                        <span className="text-xs text-gray-500 line-through ml-2">₹799</span>
                      </div>

                      <div className="text-xs text-green-600 font-medium mb-2">298 sold this month</div>

                      <button className="w-full bg-green-600 text-white py-1.5 px-3 rounded-lg hover:bg-green-700 transition-colors text-xs font-medium">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>

                {/* Customer View Insights */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
                  <h4 className="font-medium text-gray-800 mb-4">Customer Insights</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-3 border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Product Views</span>
                        <span className="text-sm font-bold text-gray-800">1,456</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{width: '78%'}}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">+23% from last week</p>
                    </div>

                    <div className="bg-white rounded-lg p-3 border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Add to Cart Rate</span>
                        <span className="text-sm font-bold text-gray-800">12.5%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: '12.5%'}}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Industry avg: 8.2%</p>
                    </div>

                    <div className="bg-white rounded-lg p-3 border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Customer Rating</span>
                        <span className="text-sm font-bold text-gray-800">4.8/5</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400 text-sm mr-2">★★★★★</div>
                        <span className="text-xs text-gray-500">based on 847 reviews</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-3 border">
                      <h5 className="text-sm font-medium text-gray-800 mb-2">Recent Review</h5>
                      <p className="text-xs text-gray-600 mb-1">&quot;Excellent quality organic produce! Fresh and authentic.&quot;</p>
                      <div className="flex items-center">
                        <span className="text-yellow-400 text-xs">★★★★★</span>
                        <span className="text-xs text-gray-500 ml-2">- Priya S.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preview Actions */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  👁️ Preview as Customer
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                  📝 Edit Product Details
                </button>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
                  📊 View Full Analytics
                </button>
                <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium">
                  💬 Customer Feedback
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Dashboard */}
        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-6">
              {['dashboard', 'products', 'orders', 'analytics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Recent Orders */}
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h3>
                  <div className="space-y-4">
                    {recentOrders.map((order, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium text-gray-800">{order.id}</p>
                          <p className="text-sm text-gray-600">{order.product}</p>
                          <p className="text-xs text-gray-500">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-800">₹{order.amount.toLocaleString()}</p>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                            order.status === 'shipped' ? 'bg-blue-100 text-blue-700' :
                            order.status === 'processing' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Products */}
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Top Performing Products</h3>
                  <div className="space-y-4">
                    {myProducts.slice(0, 4).map((product, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <span className="text-xl">📦</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-800 text-sm">{product.name}</p>
                          <p className="text-xs text-gray-600">{product.sold} sold • ₹{product.revenue.toLocaleString()} revenue</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-gray-800">₹{product.price}</p>
                          <p className="text-xs text-gray-500">{product.views} views</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Products Tab */}
            {activeTab === 'products' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800">My Products</h3>
                  <button 
                    onClick={() => setShowAddProduct(true)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    + Add New Product
                  </button>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-green-700 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-xl shadow-sm border overflow-hidden">
                      <div className="h-48 bg-gray-100 flex items-center justify-center relative">
                        <div className="text-center">
                          <div className="text-4xl mb-2">📦</div>
                          <p className="text-gray-500 text-sm">Product Image</p>
                        </div>
                        
                        {/* Status Badge */}
                        <div className="absolute top-2 left-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            product.status === 'active' ? 'bg-green-100 text-green-700' :
                            product.status === 'inactive' ? 'bg-red-100 text-red-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {product.status}
                          </span>
                        </div>

                        {/* Verification Badge */}
                        {product.verified && (
                          <div className="absolute top-2 right-2">
                            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                              🔗 Verified
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-4">
                        <h4 className="font-medium text-gray-800 mb-2">{product.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{product.category}</p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                          <div>
                            <span className="text-gray-600">Price:</span>
                            <p className="font-bold">₹{product.price}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Stock:</span>
                            <p className="font-bold">{product.stock}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Sold:</span>
                            <p className="font-bold">{product.sold}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Views:</span>
                            <p className="font-bold">{product.views}</p>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                            Edit
                          </button>
                          <button className="flex-1 bg-gray-600 text-white py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors text-sm">
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">All Orders</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Order ID</th>
                        <th className="text-left py-3">Product</th>
                        <th className="text-left py-3">Quantity</th>
                        <th className="text-left py-3">Amount</th>
                        <th className="text-left py-3">Status</th>
                        <th className="text-left py-3">Date</th>
                        <th className="text-left py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="py-3 font-medium">{order.id}</td>
                          <td className="py-3">{order.product}</td>
                          <td className="py-3">{order.quantity}</td>
                          <td className="py-3">₹{order.amount.toLocaleString()}</td>
                          <td className="py-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              order.status === 'delivered' ? 'bg-green-100 text-green-700' :
                              order.status === 'shipped' ? 'bg-blue-100 text-blue-700' :
                              order.status === 'processing' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="py-3">{order.date}</td>
                          <td className="py-3">
                            <button className="text-blue-600 hover:text-blue-800 text-sm">
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Sales Analytics</h3>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📊</div>
                      <p className="text-gray-600">Sales Chart</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm border p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Product Performance</h3>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📈</div>
                      <p className="text-gray-600">Performance Chart</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Add Product Modal */}
        {showAddProduct && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowAddProduct(false)}></div>
            <div className="absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-xl overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Add New Product</h2>
                  <button onClick={() => setShowAddProduct(false)} className="text-gray-400 hover:text-gray-600">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                    <input
                      type="text"
                      placeholder="Enter product name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                        <option>Select category</option>
                        <option>Seeds</option>
                        <option>Vegetables</option>
                        <option>Fruits</option>
                        <option>Grains</option>
                        <option>Fertilizers</option>
                        <option>Tools</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Stock Quantity</label>
                      <input
                        type="number"
                        placeholder="0"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹)</label>
                      <input
                        type="number"
                        placeholder="0.00"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Original Price (₹)</label>
                      <input
                        type="number"
                        placeholder="0.00"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      rows={4}
                      placeholder="Describe your product..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Images</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <div className="text-4xl mb-2">📷</div>
                      <p className="text-gray-600">Click to upload images</p>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6">
                    <button
                      type="button"
                      onClick={() => setShowAddProduct(false)}
                      className="flex-1 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Add Product
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default page
