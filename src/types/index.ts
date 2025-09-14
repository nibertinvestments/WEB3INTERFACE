import React from 'react';

// Network types
export interface NetworkConfig {
  chainId: number;
  name: string;
  currency: string;
  rpcUrl: string;
  explorerUrl: string;
  testnet?: boolean;
}

// Wallet types
export interface WalletInfo {
  address: string;
  balance: string;
  chainId: number;
  isConnected: boolean;
}

// Transaction types
export interface TransactionRequest {
  to: string;
  value?: string;
  data?: string;
  gasLimit?: string;
  gasPrice?: string;
}

export interface TransactionResponse {
  hash: string;
  from: string;
  to: string;
  value: string;
  gasUsed: string;
  gasPrice: string;
  status: 'pending' | 'success' | 'failed';
  timestamp: number;
}

// Contract types
export interface ContractConfig {
  address: string;
  abi: unknown[];
  name: string;
}

// Token types
export interface TokenInfo {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  logoURI?: string;
  balance?: string;
}

// UI Component types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// Theme types
export type Theme = 'light' | 'dark' | 'system';

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType;
  children?: NavItem[];
}

// Form types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea';
  placeholder?: string;
  required?: boolean;
  validation?: Record<string, unknown>;
  options?: { label: string; value: string }[];
}