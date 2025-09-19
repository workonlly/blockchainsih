'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Transaction {
  id: string;
  type: 'send' | 'receive' | 'stake' | 'reward';
  amount: number;
  recipient?: string;
  sender?: string;
  timestamp: string;
  status: 'completed' | 'pending' | 'failed';
  txHash: string;
}

function page() {
  const [activeTab, setActiveTab] = useState('transfer');
  const [transferAmount, setTransferAmount] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [selectedContact, setSelectedContact] = useState('');

  // Mock user data
  const userInfo = {
    name: 'Rajesh Kumar',
    walletAddress: '0x742d35cc6bF4D7D4A8B7F23B5F23C9A2F4E3D8C1',
    krishiCardId: 'KC-MH-2024-001234',
    farmLocation: 'Pune, Maharashtra',
    farmSize: '5.2 acres',
    memberSince: '2024-01-15',
    verificationStatus: 'verified',
    farmerType: 'Organic Farmer'
  };

  const tokenBalances = {
    agriCoin: 2450.75,
    stakingRewards: 186.32,
    totalEarned: 1850.25,
    locked: 500.00,
    available: 1950.75
  };

  const recentTransactions: Transaction[] = [
    {
      id: 'tx001',
      type: 'receive',
      amount: 125.50,
      sender: 'AgriChain Marketplace',
      timestamp: '2025-09-20T10:30:00Z',
      status: 'completed',
      txHash: '0xabc123...'
    },
    {
      id: 'tx002',
      type: 'send',
      amount: 75.25,
      recipient: 'Suresh Patel (Equipment Purchase)',
      timestamp: '2025-09-19T14:22:00Z',
      status: 'completed',
      txHash: '0xdef456...'
    },
    {
      id: 'tx003',
      type: 'stake',
      amount: 500.00,
      timestamp: '2025-09-18T09:15:00Z',
      status: 'completed',
      txHash: '0xghi789...'
    },
    {
      id: 'tx004',
      type: 'reward',
      amount: 25.80,
      sender: 'Staking Rewards',
      timestamp: '2025-09-17T16:45:00Z',
      status: 'completed',
      txHash: '0xjkl012...'
    }
  ];

  const quickContacts = [
    { name: 'Suresh Patel', address: '0x8f9e...3a2b', type: 'Equipment Supplier' },
    { name: 'AgriChain Store', address: '0x1a2b...9c8d', type: 'Marketplace' },
    { name: 'Organic Co-op', address: '0x5e6f...7g8h', type: 'Cooperative' },
    { name: 'Fertilizer Hub', address: '0x9i0j...3k4l', type: 'Supplier' }
  ];

  const handleTransfer = () => {
    if (!transferAmount || !recipientAddress) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Mock transfer logic
    alert(`Transfer of ${transferAmount} AgriCoins to ${recipientAddress} initiated!`);
    setTransferAmount('');
    setRecipientAddress('');
    setSelectedContact('');
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'send': return '↗️';
      case 'receive': return '↙️';
      case 'stake': return '🔒';
      case 'reward': return '🎁';
      default: return '💰';
    }
  };

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
              <span className="text-lg font-bold text-gray-800">AgriCoin Wallet</span>
            </div>
          </div>
        </header>

        {/* User Information Section */}
        <section className="p-4 md:p-6 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                
                {/* User Profile */}
                <div className="lg:w-1/3">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">👨‍🌾</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">{userInfo.name}</h2>
                    <p className="text-gray-600">{userInfo.farmerType}</p>
                    <div className="flex items-center justify-center mt-2">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified Farmer
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Krishi Card ID:</span>
                      <span className="font-medium">{userInfo.krishiCardId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Farm Location:</span>
                      <span className="font-medium">{userInfo.farmLocation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Farm Size:</span>
                      <span className="font-medium">{userInfo.farmSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Member Since:</span>
                      <span className="font-medium">{new Date(userInfo.memberSince).toLocaleDateString()}</span>
                    </div>
                    <div className="pt-3 border-t">
                      <p className="text-xs text-gray-500">Wallet Address:</p>
                      <p className="font-mono text-sm bg-gray-100 p-2 rounded mt-1">
                        {formatAddress(userInfo.walletAddress)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Token Balances */}
                <div className="lg:w-2/3">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Token Overview</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm opacity-90">Available Balance</span>
                        <span className="text-2xl">🪙</span>
                      </div>
                      <div className="text-2xl font-bold">{tokenBalances.available.toLocaleString()}</div>
                      <div className="text-sm opacity-90">AgriCoins</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm opacity-90">Staked Tokens</span>
                        <span className="text-2xl">🔒</span>
                      </div>
                      <div className="text-2xl font-bold">{tokenBalances.locked.toLocaleString()}</div>
                      <div className="text-sm opacity-90">Locked for rewards</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm opacity-90">Staking Rewards</span>
                        <span className="text-2xl">🎁</span>
                      </div>
                      <div className="text-2xl font-bold">{tokenBalances.stakingRewards.toLocaleString()}</div>
                      <div className="text-sm opacity-90">Earned this month</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-600">Total Portfolio Value</span>
                      <span className="text-2xl font-bold text-gray-800">
                        {tokenBalances.agriCoin.toLocaleString()} AC
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">≈ ₹{(tokenBalances.agriCoin * 15.5).toLocaleString()}</span>
                      <span className="text-green-600">+12.5% this month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Token Exchange/Transfer Section */}
        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-6">
              {['transfer', 'receive', 'stake', 'history'].map((tab) => (
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Main Action Panel */}
              <div className="lg:col-span-2">
                {activeTab === 'transfer' && (
                  <div className="bg-white rounded-xl shadow-sm border p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Send AgriCoins</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Recipient Address or Contact
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={recipientAddress}
                            onChange={(e) => setRecipientAddress(e.target.value)}
                            placeholder="0x... or select from contacts"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          />
                          <svg className="absolute right-3 top-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Amount (AgriCoins)
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            value={transferAmount}
                            onChange={(e) => setTransferAmount(e.target.value)}
                            placeholder="0.00"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          />
                          <div className="absolute right-3 top-3 flex items-center space-x-2">
                            <span className="text-sm text-gray-500">AC</span>
                            <button 
                              onClick={() => setTransferAmount(tokenBalances.available.toString())}
                              className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded"
                            >
                              MAX
                            </button>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Available: {tokenBalances.available.toLocaleString()} AC
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Transaction Note (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="Equipment purchase, seeds payment, etc."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Amount:</span>
                          <span>{transferAmount || '0'} AC</span>
                        </div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Network Fee:</span>
                          <span>0.1 AC</span>
                        </div>
                        <div className="border-t pt-2">
                          <div className="flex justify-between font-medium">
                            <span>Total:</span>
                            <span>{(parseFloat(transferAmount) + 0.1 || 0.1).toFixed(1)} AC</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={handleTransfer}
                        className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
                      >
                        Send AgriCoins
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'receive' && (
                  <div className="bg-white rounded-xl shadow-sm border p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Receive AgriCoins</h3>
                    
                    <div className="text-center">
                      <div className="w-48 h-48 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <div className="text-center">
                          <div className="text-6xl mb-2">📱</div>
                          <p className="text-gray-600">QR Code</p>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <p className="text-sm text-gray-600 mb-2">Your Wallet Address:</p>
                        <p className="font-mono text-sm bg-white p-3 rounded border">
                          {userInfo.walletAddress}
                        </p>
                        <button className="mt-2 text-sm text-green-600 hover:text-green-700">
                          Copy Address
                        </button>
                      </div>
                      
                      <p className="text-sm text-gray-600">
                        Share this address or QR code to receive AgriCoins from other users.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'stake' && (
                  <div className="bg-white rounded-xl shadow-sm border p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Stake AgriCoins</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-800 mb-2">Current Staking Pool</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">APY:</span>
                            <span className="font-bold text-green-600 ml-2">12.5%</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Lock Period:</span>
                            <span className="font-bold ml-2">30 days</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Min. Stake:</span>
                            <span className="font-bold ml-2">100 AC</span>
                          </div>
                          <div>
                            <span className="text-gray-600">Your Staked:</span>
                            <span className="font-bold ml-2">{tokenBalances.locked} AC</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Amount to Stake
                        </label>
                        <input
                          type="number"
                          placeholder="100"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>

                      <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                        Stake Tokens
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'history' && (
                  <div className="bg-white rounded-xl shadow-sm border p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Transaction History</h3>
                    
                    <div className="space-y-4">
                      {recentTransactions.map((tx) => (
                        <div key={tx.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                          <div className="flex items-center space-x-4">
                            <div className="text-2xl">{getTransactionIcon(tx.type)}</div>
                            <div>
                              <p className="font-medium text-gray-800">
                                {tx.type === 'send' ? `Sent to ${tx.recipient}` :
                                 tx.type === 'receive' ? `Received from ${tx.sender}` :
                                 tx.type === 'stake' ? 'Staked tokens' :
                                 `${tx.sender}`}
                              </p>
                              <p className="text-sm text-gray-600">
                                {new Date(tx.timestamp).toLocaleDateString()} • {formatAddress(tx.txHash)}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className={`font-bold ${tx.type === 'send' ? 'text-red-600' : 'text-green-600'}`}>
                              {tx.type === 'send' ? '-' : '+'}{tx.amount} AC
                            </p>
                            <p className={`text-xs ${
                              tx.status === 'completed' ? 'text-green-600' :
                              tx.status === 'pending' ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                              {tx.status}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Actions Sidebar */}
              <div className="space-y-6">
                
                {/* Quick Contacts */}
                <div className="bg-white rounded-xl shadow-sm border p-4">
                  <h4 className="font-medium text-gray-800 mb-4">Quick Contacts</h4>
                  <div className="space-y-2">
                    {quickContacts.map((contact, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setRecipientAddress(contact.address);
                          setSelectedContact(contact.name);
                          setActiveTab('transfer');
                        }}
                        className="w-full text-left p-3 rounded-lg hover:bg-gray-50 border transition-colors"
                      >
                        <p className="font-medium text-sm">{contact.name}</p>
                        <p className="text-xs text-gray-600">{contact.type}</p>
                        <p className="text-xs text-gray-500 font-mono">{formatAddress(contact.address)}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Info */}
                <div className="bg-white rounded-xl shadow-sm border p-4">
                  <h4 className="font-medium text-gray-800 mb-4">Market Info</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">AgriCoin Price</span>
                      <span className="font-bold">₹15.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">24h Change</span>
                      <span className="text-green-600 font-medium">+2.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Market Cap</span>
                      <span className="font-medium">₹45.2M</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm border p-4">
                  <h4 className="font-medium text-gray-800 mb-4">Quick Actions</h4>
                  <div className="space-y-2">
                    <button className="w-full bg-blue-50 text-blue-700 py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors text-sm">
                      Buy More Tokens
                    </button>
                    <button className="w-full bg-green-50 text-green-700 py-2 px-4 rounded-lg hover:bg-green-100 transition-colors text-sm">
                      Withdraw to Bank
                    </button>
                    <button className="w-full bg-purple-50 text-purple-700 py-2 px-4 rounded-lg hover:bg-purple-100 transition-colors text-sm">
                      View Analytics
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default page
