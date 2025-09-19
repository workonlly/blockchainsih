import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home Link */}
        <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 md:mb-8 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-sm md:text-base">Back to Home</span>
        </Link>

        {/* Login Card */}
        <div className="bg-white/95 backdrop-filter backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8">
          {/* Logo and Title */}
          <div className="text-center mb-6 md:mb-8">
            <div className="flex items-center justify-center mb-4">
              <Image src="/globe.svg" alt="AgriChain Logo" width={40} height={40} className="mr-3 md:w-12 md:h-12" />
              <div className="text-2xl md:text-3xl font-bold text-gray-800">Agri<span className="text-green-700">Chain</span></div>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Welcome Back</h1>
            <p className="text-gray-600 text-sm md:text-base">Sign in with your Krishi Card credentials</p>
          </div>

          {/* Login Form */}
          <form className="space-y-5 md:space-y-6">
            {/* Krishi Card Number Field */}
            <div>
              <label htmlFor="krishiCard" className="block text-sm font-medium text-gray-700 mb-2">
                Krishi Card Number
              </label>
              <input
                type="text"
                id="krishiCard"
                name="krishiCard"
                required
                pattern="[0-9]{12}"
                maxLength={12}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-sm md:text-base"
                placeholder="Enter your 12-digit Krishi Card number"
              />
              <p className="text-xs text-gray-500 mt-1">Enter your 12-digit Krishi Card registration number</p>
            </div>

            {/* PIN Field */}
            <div>
              <label htmlFor="pin" className="block text-sm font-medium text-gray-700 mb-2">
                Krishi Card PIN
              </label>
              <input
                type="password"
                id="pin"
                name="pin"
                required
                pattern="[0-9]{4,6}"
                maxLength={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors text-sm md:text-base"
                placeholder="Enter your Krishi Card PIN"
              />
              <p className="text-xs text-gray-500 mt-1">Enter your 4-6 digit PIN associated with your Krishi Card</p>
            </div>

            {/* Remember Me and Forgot PIN */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember my Krishi Card
                </label>
              </div>
              <Link href="/forgot-pin" className="text-sm text-green-600 hover:text-green-700 transition-colors">
                Forgot PIN?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 px-4 rounded-lg hover:bg-green-800 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors font-medium"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
          </div>

          {/* Social Login Options */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 mr-3" fill="#1877f2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Continue with Facebook
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have a Krishi Card?{' '}
              <Link href="/signup" className="text-green-600 hover:text-green-700 font-medium transition-colors">
                Register here
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-white/60 text-sm">
            © 2025 AgriChain. Securing agriculture with blockchain technology.
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
