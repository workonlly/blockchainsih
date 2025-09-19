"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-800 p-1 ">
      <div className="h-[100vh] w-full bg-white/95 backdrop-filter backdrop-blur-sm border border-gray-100 shadow-lg rounded-2xl overflow-hidden flex flex-col">
        
        {/* Navigation Bar */}
        <nav className="p-6 border-b border-gray-100 bg-white/90">
          <div className="flex flex-row justify-between items-center max-w-7xl mx-auto">
            <div className="flex items-center">
              <Image src="/globe.svg" alt="Logo" width={32} height={32} className="mr-3 text-green-600" />
              <div className="text-3xl font-bold text-gray-800">Agri<span className="text-green-700">Chain</span></div>
            </div>
            <div className="flex flex-row items-center gap-8">
              <div className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer font-medium">Home</div>
              <div className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer font-medium">Store</div>
              <div className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer font-medium">Marketplace</div>
              <div className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer font-medium">News</div>
              <div className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer font-medium">Token</div>
              <Link href="/login">
                <button className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition-colors">Login</button>
              </Link>
            </div>
          </div>
        </nav>
        
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
           {/* Hero Section */}
          <div className="py-12 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">Blockchain for <span className="text-green-700">Agriculture</span></h1>
                <p className="text-gray-600 text-lg mb-8">Transparent supply chain management for agricultural products. Track from farm to table with immutable blockchain records.</p>
                <div className="flex gap-4">
                  <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors font-medium">Trace Products</button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">Learn More</button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 bg-green-100 rounded-full opacity-20"></div>
                  <Image src="/window.svg" alt="Blockchain" width={300} height={300} className="relative z-10" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Stakeholder Categories */}
          <div className="py-12 px-6 bg-gray-50/50 backdrop-filter backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center">Stakeholder Access</h2>
              <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">Specialized interfaces for each participant in the supply chain</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-800 text-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer h-64 flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Farmers</h3>
                    <p className="text-gray-200">Register produce, set fair prices, and track sales</p>
                  </div>
                </div>
                
                <div className="bg-green-900 text-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer h-64 flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Distributors</h3>
                    <p className="text-gray-200">Verify origin, manage logistics, and ensure quality</p>
                  </div>
                </div>
                
                <div className="bg-green-950 text-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer h-64 flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Retailers</h3>
                    <p className="text-gray-200">Confirm authenticity and provide transparency to consumers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="py-12 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center">Key Features</h2>
            <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">How our blockchain solution ensures transparency</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">QR Code Tracking</h3>
                <p className="text-gray-600">Scan product QR codes to view complete journey from farm to store</p>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Smart Contracts</h3>
                <p className="text-gray-600">Automated agreements ensure fair pricing and timely payments</p>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Verification</h3>
                <p className="text-gray-600">Immutable records of quality checks and certifications</p>
              </div>
            </div>
          </div>
          
          {/* Product Tracking Demo */}
          <div className="py-12 px-6 bg-gray-50/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">How Product Tracking Works</h2>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <div className="border border-gray-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center mr-3">1</div>
                        <h3 className="text-xl font-bold text-gray-800">Farm Registration</h3>
                      </div>
                      <p className="text-gray-600 ml-11">Farmer registers harvest with location, date, and quality metrics</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center mr-3">2</div>
                        <h3 className="text-xl font-bold text-gray-800">Processing & Transport</h3>
                      </div>
                      <p className="text-gray-600 ml-11">Each handler logs condition, temperature, and time in transit</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center mr-3">3</div>
                        <h3 className="text-xl font-bold text-gray-800">Retail Verification</h3>
                      </div>
                      <p className="text-gray-600 ml-11">Store confirms receipt and final quality check</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center mr-3">4</div>
                        <h3 className="text-xl font-bold text-gray-800">Consumer Access</h3>
                      </div>
                      <p className="text-gray-600 ml-11">Shoppers scan QR code to view complete journey</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 flex items-center justify-center">
                    <div className="bg-gray-100 rounded-lg h-80 w-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4">📱</div>
                        <p className="text-gray-600">Scan QR code to trace product</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="py-12 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center">Benefits for All</h2>
            <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">How our platform creates value across the supply chain</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">For Farmers</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Fair price discovery and direct market access</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Reduced payment delays through smart contracts</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Premium pricing for quality and sustainable practices</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">For Consumers</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Complete transparency about product origins</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Verification of quality claims and certifications</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Support for sustainable and ethical farming practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="py-12 px-6 bg-green-900 text-white">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to bring transparency to agriculture?</h2>
              <p className="text-gray-200 mb-8 max-w-2xl mx-auto">Join our platform today and be part of the agricultural revolution. Whether you're a farmer, distributor, retailer, or consumer, AgriChain helps you participate in a more transparent food system.</p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <button className="bg-white text-green-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">Register Now</button>
                <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors font-medium">Schedule Demo</button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 z-50"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
