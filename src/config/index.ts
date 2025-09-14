import { NetworkConfig } from '@/types';

// Supported networks configuration
export const SUPPORTED_NETWORKS: Record<number, NetworkConfig> = {
  1: {
    chainId: 1,
    name: 'Ethereum Mainnet',
    currency: 'ETH',
    rpcUrl: 'https://eth-mainnet.alchemyapi.io/v2/your-api-key',
    explorerUrl: 'https://etherscan.io',
  },
  11155111: {
    chainId: 11155111,
    name: 'Sepolia Testnet',
    currency: 'ETH',
    rpcUrl: 'https://eth-sepolia.g.alchemy.com/v2/your-api-key',
    explorerUrl: 'https://sepolia.etherscan.io',
    testnet: true,
  },
  137: {
    chainId: 137,
    name: 'Polygon',
    currency: 'MATIC',
    rpcUrl: 'https://polygon-rpc.com',
    explorerUrl: 'https://polygonscan.com',
  },
  80001: {
    chainId: 80001,
    name: 'Mumbai Testnet',
    currency: 'MATIC',
    rpcUrl: 'https://rpc-mumbai.maticvigil.com',
    explorerUrl: 'https://mumbai.polygonscan.com',
    testnet: true,
  },
  56: {
    chainId: 56,
    name: 'BNB Smart Chain',
    currency: 'BNB',
    rpcUrl: 'https://bsc-dataseed.binance.org',
    explorerUrl: 'https://bscscan.com',
  },
  97: {
    chainId: 97,
    name: 'BNB Testnet',
    currency: 'BNB',
    rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    explorerUrl: 'https://testnet.bscscan.com',
    testnet: true,
  },
};

// Default network (Sepolia testnet for development)
export const DEFAULT_NETWORK = SUPPORTED_NETWORKS[11155111];

// Contract addresses by network
export const CONTRACT_ADDRESSES: Record<number, Record<string, string>> = {
  1: {
    // Mainnet contract addresses
  },
  11155111: {
    // Sepolia testnet contract addresses
  },
  137: {
    // Polygon contract addresses
  },
  80001: {
    // Mumbai testnet contract addresses
  },
};

// Application configuration
export const APP_CONFIG = {
  name: 'Web3 Interface',
  description: 'A comprehensive Web3 user interface for decentralized applications',
  version: '0.1.0',
  author: 'Nibert Investments',
  url: 'https://github.com/nibertinvestments/WEB3INTERFACE',
  contact: {
    email: 'contact@nibertinvestments.com',
    twitter: '@nibertinvest',
  },
};

// Feature flags
export const FEATURES = {
  WALLET_CONNECT: true,
  MULTI_CHAIN: true,
  DARK_MODE: true,
  NOTIFICATIONS: true,
  ANALYTICS: false, // Disabled by default for privacy
};

// API endpoints
export const API_ENDPOINTS = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  COINGECKO: 'https://api.coingecko.com/api/v3',
  ETHERSCAN: 'https://api.etherscan.io/api',
  POLYGONSCAN: 'https://api.polygonscan.com/api',
};

// Storage keys
export const STORAGE_KEYS = {
  THEME: 'web3-interface-theme',
  WALLET_CONNECTED: 'web3-interface-wallet-connected',
  USER_PREFERENCES: 'web3-interface-user-preferences',
  RECENT_TRANSACTIONS: 'web3-interface-recent-transactions',
};

// Transaction settings
export const TRANSACTION_SETTINGS = {
  DEFAULT_GAS_LIMIT: '21000',
  DEFAULT_GAS_PRICE: '20000000000', // 20 gwei
  CONFIRMATION_BLOCKS: 1,
  TIMEOUT_MS: 60000, // 1 minute
};

// UI Configuration
export const UI_CONFIG = {
  MOBILE_BREAKPOINT: 768,
  TABLET_BREAKPOINT: 1024,
  DESKTOP_BREAKPOINT: 1280,
  MAX_CONTENT_WIDTH: 1440,
  SIDEBAR_WIDTH: 280,
  HEADER_HEIGHT: 64,
};