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

interface NFT {
  id: string;
  tokenId: number;
  name: string;
  description: string;
  image: string;
  attributes: {
    trait_type: string;
    value: string | number;
  }[];
  contractAddress: string;
  creator: string;
  owner: string;
  price?: number;
  isForSale: boolean;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
  category: 'Farm Certificate' | 'Product Quality' | 'Achievement' | 'Harvest Record';
}

function Page() {
  const [activeTab, setActiveTab] = useState('nfts');
  const [transferAmount, setTransferAmount] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);
  const [nftViewMode, setNftViewMode] = useState<'owned' | 'marketplace'>('owned');

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

  // ERC-721 NFT Collection
  const ownedNFTs: NFT[] = [
    {
      id: 'nft001',
      tokenId: 1234,
      name: 'Organic Farm Certificate #1234',
      description: 'Official organic certification for Rajesh Kumar\'s farm in Pune, Maharashtra. This NFT represents verified organic farming practices and sustainable agriculture methods.',
      image: '🌱',
      attributes: [
        { trait_type: 'Farm Size', value: '5.2 acres' },
        { trait_type: 'Certification Date', value: '2024-01-15' },
        { trait_type: 'Organic Score', value: 95 },
        { trait_type: 'Location', value: 'Pune, Maharashtra' },
        { trait_type: 'Crop Types', value: 'Multi-crop' }
      ],
      contractAddress: '0x721abc...def123',
      creator: 'AgriChain Certification Authority',
      owner: '0x742d35cc6bF4D7D4A8B7F23B5F23C9A2F4E3D8C1',
      isForSale: false,
      rarity: 'Epic',
      category: 'Farm Certificate'
    },
    {
      id: 'nft002',
      tokenId: 5678,
      name: 'Premium Wheat Harvest 2024',
      description: 'High-quality wheat harvest record from certified organic farm. This NFT represents 150 quintals of premium wheat with blockchain-verified quality metrics.',
      image: '🌾',
      attributes: [
        { trait_type: 'Harvest Date', value: '2024-04-20' },
        { trait_type: 'Quantity', value: '150 quintals' },
        { trait_type: 'Quality Grade', value: 'A+' },
        { trait_type: 'Moisture Content', value: '12%' },
        { trait_type: 'Protein Content', value: '14.2%' }
      ],
      contractAddress: '0x721abc...def123',
      creator: 'AgriChain Quality Assurance',
      owner: '0x742d35cc6bF4D7D4A8B7F23B5F23C9A2F4E3D8C1',
      price: 250,
      isForSale: true,
      rarity: 'Rare',
      category: 'Harvest Record'
    },
    {
      id: 'nft003',
      tokenId: 9012,
      name: 'Sustainable Farmer Achievement',
      description: 'Recognition for implementing sustainable farming practices and contributing to environmental conservation through regenerative agriculture.',
      image: '🏆',
      attributes: [
        { trait_type: 'Achievement Date', value: '2024-06-15' },
        { trait_type: 'Carbon Offset', value: '2.3 tons CO2' },
        { trait_type: 'Water Saved', value: '5000 liters' },
        { trait_type: 'Biodiversity Score', value: 88 },
        { trait_type: 'Achievement Level', value: 'Gold' }
      ],
      contractAddress: '0x721abc...def123',
      creator: 'AgriChain Environmental Council',
      owner: '0x742d35cc6bF4D7D4A8B7F23B5F23C9A2F4E3D8C1',
      isForSale: false,
      rarity: 'Legendary',
      category: 'Achievement'
    }
  ];

  const marketplaceNFTs: NFT[] = [
    {
      id: 'nft004',
      tokenId: 3456,
      name: 'Basmati Rice Quality Certificate',
      description: 'Premium basmati rice quality certification with verified aroma and grain length specifications.',
      image: '🍚',
      attributes: [
        { trait_type: 'Variety', value: 'Basmati 1121' },
        { trait_type: 'Grain Length', value: '7.2mm' },
        { trait_type: 'Aroma Score', value: 92 },
        { trait_type: 'Quantity', value: '500 kg' }
      ],
      contractAddress: '0x721abc...def123',
      creator: 'Suresh Patel Farms',
      owner: '0x8f9e...3a2b',
      price: 180,
      isForSale: true,
      rarity: 'Uncommon',
      category: 'Product Quality'
    },
    {
      id: 'nft005',
      tokenId: 7890,
      name: 'Mango Grove Heritage NFT',
      description: 'Century-old mango grove with heritage variety trees, representing traditional farming wisdom.',
      image: '🥭',
      attributes: [
        { trait_type: 'Tree Age', value: '100+ years' },
        { trait_type: 'Variety', value: 'Alphonso Heritage' },
        { trait_type: 'Annual Yield', value: '2000 mangoes' },
        { trait_type: 'Heritage Status', value: 'Certified' }
      ],
      contractAddress: '0x721abc...def123',
      creator: 'Heritage Farms Collective',
      owner: '0x1a2b...9c8d',
      price: 500,
      isForSale: true,
      rarity: 'Legendary',
      category: 'Farm Certificate'
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
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'text-gray-600 bg-gray-100';
      case 'Uncommon': return 'text-green-600 bg-green-100';
      case 'Rare': return 'text-blue-600 bg-blue-100';
      case 'Epic': return 'text-purple-600 bg-purple-100';
      case 'Legendary': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Farm Certificate': return '📜';
      case 'Product Quality': return '⭐';
      case 'Achievement': return '🏆';
      case 'Harvest Record': return '📊';
      default: return '🎨';
    }
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
              <span className="text-lg font-bold text-gray-800">AgriChain NFT Wallet</span>
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

                {/* NFT Portfolio */}
                <div className="lg:w-2/3">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">NFT Portfolio Overview</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm opacity-90">Total NFTs</span>
                        <span className="text-2xl">🎨</span>
                      </div>
                      <div className="text-2xl font-bold">{ownedNFTs.length}</div>
                      <div className="text-sm opacity-90">Unique Items</div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm opacity-90">Legendary NFTs</span>
                        <span className="text-2xl">�</span>
                      </div>
                      <div className="text-2xl font-bold">{ownedNFTs.filter(nft => nft.rarity === 'Legendary').length}</div>
                      <div className="text-sm opacity-90">Rare Collection</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-medium text-gray-800 mb-3">Collection Breakdown</h4>
                    <div className="space-y-2">
                      {['Farm Certificate', 'Product Quality', 'Achievement', 'Harvest Record'].map(category => {
                        const count = ownedNFTs.filter(nft => nft.category === category).length;
                        return (
                          <div key={category} className="flex justify-between items-center">
                            <span className="text-sm text-gray-600 flex items-center">
                              <span className="mr-2">{getCategoryIcon(category)}</span>
                              {category}
                            </span>
                            <span className="font-medium">{count}</span>
                          </div>
                        );
                      })}
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
              {['send', 'receive', 'nfts', 'history'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab === 'nfts' ? 'NFTs' : 
                   tab === 'send' ? 'Send NFT' :
                   tab === 'receive' ? 'Receive NFT' :
                   tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Main Action Panel */}
              <div className="lg:col-span-2">
                {activeTab === 'send' && (
                  <div className="bg-white rounded-xl shadow-sm border p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Send NFT</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Select NFT to Send
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-60 overflow-y-auto">
                          {ownedNFTs.map((nft) => (
                            <div
                              key={nft.id}
                              className={`border rounded-lg p-3 cursor-pointer transition-all ${
                                selectedNFT?.id === nft.id ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'
                              }`}
                              onClick={() => setSelectedNFT(nft)}
                            >
                              <div className="flex items-center space-x-3">
                                <span className="text-2xl">{nft.image}</span>
                                <div className="flex-1 min-w-0">
                                  <p className="font-medium text-gray-800 truncate">{nft.name}</p>
                                  <p className="text-xs text-gray-500">#{nft.tokenId}</p>
                                  <span className={`inline-block px-2 py-1 rounded-full text-xs ${getRarityColor(nft.rarity)}`}>
                                    {nft.rarity}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Recipient Address
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
                          Transfer Note (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="Gift, sale, trade, etc."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>

                      {selectedNFT && (
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-medium text-gray-800 mb-2">Transfer Summary</h4>
                          <div className="flex justify-between text-sm mb-2">
                            <span>NFT:</span>
                            <span>{selectedNFT.name}</span>
                          </div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Token ID:</span>
                            <span>#{selectedNFT.tokenId}</span>
                          </div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Gas Fee:</span>
                            <span>~0.005 ETH</span>
                          </div>
                          <div className="border-t pt-2">
                            <div className="flex justify-between font-medium">
                              <span>Status:</span>
                              <span className="text-green-600">Ready to Transfer</span>
                            </div>
                          </div>
                        </div>
                      )}

                      <button
                        onClick={() => {
                          if (!selectedNFT || !recipientAddress) {
                            alert('Please select an NFT and enter recipient address');
                            return;
                          }
                          alert(`Transfer of ${selectedNFT.name} to ${recipientAddress} initiated!`);
                          setSelectedNFT(null);
                          setRecipientAddress('');
                        }}
                        disabled={!selectedNFT || !recipientAddress}
                        className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
                      >
                        Transfer NFT
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'receive' && (
                  <div className="bg-white rounded-xl shadow-sm border p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Receive NFTs</h3>
                    
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
                      
                      <div className="bg-blue-50 rounded-lg p-4 mb-4">
                        <h4 className="font-medium text-blue-800 mb-2">Supported NFT Standards</h4>
                        <div className="flex justify-center space-x-4 text-sm">
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">ERC-721</span>
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">ERC-1155</span>
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Agricultural NFTs</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600">
                        Share this address or QR code to receive NFTs from other users. Make sure the sender supports the same network.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'nfts' && (
                  <div className="bg-white rounded-xl shadow-sm border p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold text-gray-800">ERC-721 NFT Collection</h3>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setNftViewMode('owned')}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            nftViewMode === 'owned'
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          My NFTs ({ownedNFTs.length})
                        </button>
                        <button
                          onClick={() => setNftViewMode('marketplace')}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            nftViewMode === 'marketplace'
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          Marketplace
                        </button>
                      </div>
                    </div>

                    {nftViewMode === 'owned' && (
                      <div className="space-y-4">
                        {ownedNFTs.length === 0 ? (
                          <div className="text-center py-12">
                            <div className="text-6xl mb-4">🎨</div>
                            <h4 className="text-lg font-medium text-gray-800 mb-2">No NFTs Yet</h4>
                            <p className="text-gray-600 mb-4">Start your agricultural NFT collection by earning certificates and achievements.</p>
                            <button 
                              onClick={() => setNftViewMode('marketplace')}
                              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                            >
                              Browse Marketplace
                            </button>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {ownedNFTs.map((nft) => (
                              <div
                                key={nft.id}
                                className="border rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer"
                                onClick={() => setSelectedNFT(nft)}
                              >
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center space-x-2">
                                    <span className="text-3xl">{nft.image}</span>
                                    <span className="text-xl">{getCategoryIcon(nft.category)}</span>
                                  </div>
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(nft.rarity)}`}>
                                    {nft.rarity}
                                  </span>
                                </div>
                                
                                <h4 className="font-bold text-gray-800 mb-2 line-clamp-1">{nft.name}</h4>
                                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{nft.description}</p>
                                
                                <div className="flex justify-between items-center text-xs text-gray-500">
                                  <span>Token ID: #{nft.tokenId}</span>
                                  {nft.isForSale && nft.price && (
                                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-medium">
                                      {nft.price} AC
                                    </span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {nftViewMode === 'marketplace' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {marketplaceNFTs.map((nft) => (
                            <div
                              key={nft.id}
                              className="border rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer"
                              onClick={() => setSelectedNFT(nft)}
                            >
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-2">
                                  <span className="text-3xl">{nft.image}</span>
                                  <span className="text-xl">{getCategoryIcon(nft.category)}</span>
                                </div>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(nft.rarity)}`}>
                                  {nft.rarity}
                                </span>
                              </div>
                              
                              <h4 className="font-bold text-gray-800 mb-2 line-clamp-1">{nft.name}</h4>
                              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{nft.description}</p>
                              
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500">by {nft.creator}</span>
                                <div className="flex items-center space-x-2">
                                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                                    {nft.price} AC
                                  </span>
                                  <button className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700 transition-colors">
                                    Buy
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'history' && (
                  <div className="bg-white rounded-xl shadow-sm border p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">NFT Transaction History</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-center space-x-4">
                          <div className="text-2xl">📥</div>
                          <div>
                            <p className="font-medium text-gray-800">Received Organic Farm Certificate #1234</p>
                            <p className="text-sm text-gray-600">
                              2024-01-15 • from AgriChain Certification Authority
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-600">+1 NFT</p>
                          <p className="text-xs text-green-600">completed</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-center space-x-4">
                          <div className="text-2xl">📥</div>
                          <div>
                            <p className="font-medium text-gray-800">Earned Premium Wheat Harvest 2024</p>
                            <p className="text-sm text-gray-600">
                              2024-04-20 • from AgriChain Quality Assurance
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-600">+1 NFT</p>
                          <p className="text-xs text-green-600">completed</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-center space-x-4">
                          <div className="text-2xl">🏆</div>
                          <div>
                            <p className="font-medium text-gray-800">Unlocked Sustainable Farmer Achievement</p>
                            <p className="text-sm text-gray-600">
                              2024-06-15 • from AgriChain Environmental Council
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-purple-600">+1 Legendary NFT</p>
                          <p className="text-xs text-green-600">completed</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-center space-x-4">
                          <div className="text-2xl">📤</div>
                          <div>
                            <p className="font-medium text-gray-800">Listed Premium Wheat Harvest for Sale</p>
                            <p className="text-sm text-gray-600">
                              2024-09-18 • Price: 250 AC
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-600">Listed</p>
                          <p className="text-xs text-blue-600">active</p>
                        </div>
                      </div>

                      <div className="text-center py-4">
                        <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                          View All Transactions
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Actions Sidebar */}
              <div className="space-y-6">
                
                {/* Quick Contacts */}
                <div className="bg-white rounded-xl shadow-sm border p-4">
                  <h4 className="font-medium text-gray-800 mb-4">Quick NFT Actions</h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => setActiveTab('nfts')}
                      className="w-full text-left p-3 rounded-lg hover:bg-gray-50 border transition-colors"
                    >
                      <p className="font-medium text-sm flex items-center">
                        <span className="mr-2">🎨</span>
                        View Collection
                      </p>
                      <p className="text-xs text-gray-600">Browse your NFTs</p>
                    </button>
                    <button
                      onClick={() => setActiveTab('send')}
                      className="w-full text-left p-3 rounded-lg hover:bg-gray-50 border transition-colors"
                    >
                      <p className="font-medium text-sm flex items-center">
                        <span className="mr-2">📤</span>
                        Send NFT
                      </p>
                      <p className="text-xs text-gray-600">Transfer to others</p>
                    </button>
                    <button
                      onClick={() => {
                        setNftViewMode('marketplace');
                        setActiveTab('nfts');
                      }}
                      className="w-full text-left p-3 rounded-lg hover:bg-gray-50 border transition-colors"
                    >
                      <p className="font-medium text-sm flex items-center">
                        <span className="mr-2">🛒</span>
                        Browse Marketplace
                      </p>
                      <p className="text-xs text-gray-600">Buy from others</p>
                    </button>
                  </div>
                </div>

                {/* NFT Stats */}
                <div className="bg-white rounded-xl shadow-sm border p-4">
                  <h4 className="font-medium text-gray-800 mb-4">Collection Stats</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total NFTs</span>
                      <span className="font-bold">{ownedNFTs.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Legendary Items</span>
                      <span className="text-yellow-600 font-medium">{ownedNFTs.filter(nft => nft.rarity === 'Legendary').length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Listed for Sale</span>
                      <span className="text-green-600 font-medium">{ownedNFTs.filter(nft => nft.isForSale).length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* NFT Detail Modal */}
        {selectedNFT && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl">{selectedNFT.image}</span>
                    <span className="text-2xl">{getCategoryIcon(selectedNFT.category)}</span>
                  </div>
                  <button
                    onClick={() => setSelectedNFT(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold text-gray-800">{selectedNFT.name}</h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRarityColor(selectedNFT.rarity)}`}>
                      {selectedNFT.rarity}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{selectedNFT.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">NFT Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Token ID:</span>
                        <span className="font-medium">#{selectedNFT.tokenId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Contract:</span>
                        <span className="font-mono text-xs">{formatAddress(selectedNFT.contractAddress)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Creator:</span>
                        <span className="font-medium">{selectedNFT.creator}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Owner:</span>
                        <span className="font-mono text-xs">{formatAddress(selectedNFT.owner)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Category:</span>
                        <span className="font-medium">{selectedNFT.category}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Attributes</h3>
                    <div className="space-y-2">
                      {selectedNFT.attributes.map((attr, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs text-gray-600 mb-1">{attr.trait_type}</div>
                          <div className="font-medium text-gray-800">{attr.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedNFT.isForSale && selectedNFT.price && (
                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-sm text-gray-600">Current Price</div>
                        <div className="text-2xl font-bold text-gray-800">{selectedNFT.price} AC</div>
                        <div className="text-sm text-gray-500">≈ ₹{(selectedNFT.price * 15.5).toLocaleString()}</div>
                      </div>
                      <div className="space-x-3">
                        {selectedNFT.owner === userInfo.walletAddress ? (
                          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                            Remove from Sale
                          </button>
                        ) : (
                          <>
                            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                              Make Offer
                            </button>
                            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                              Buy Now
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {selectedNFT.owner === userInfo.walletAddress && !selectedNFT.isForSale && (
                  <div className="border-t pt-6">
                    <div className="flex space-x-3">
                      <button className="flex-1 border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                        Transfer NFT
                      </button>
                      <button className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        List for Sale
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Page
