import { useState, useCallback } from 'react';
import { WalletInfo } from '@/types';

export const useWallet = () => {
  const [walletInfo, setWalletInfo] = useState<WalletInfo>({
    address: '',
    balance: '0',
    chainId: 0,
    isConnected: false,
  });
  
  const [isConnecting, setIsConnecting] = useState(false);

  const connect = useCallback(async () => {
    if (typeof window.ethereum === 'undefined') {
      alert('Please install MetaMask or another Web3 wallet!');
      return;
    }

    setIsConnecting(true);
    
    try {
      // Request account access
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      }) as string[];

      if (accounts.length === 0) {
        throw new Error('No accounts found');
      }

      // Get balance
      const balance = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [accounts[0], 'latest'],
      }) as string;

      // Get chain ID
      const chainId = await window.ethereum.request({
        method: 'eth_chainId',
      }) as string;

      // Convert balance from wei to ether (simplified)
      const balanceInEth = (parseInt(balance, 16) / 1e18).toFixed(4);

      setWalletInfo({
        address: accounts[0],
        balance: balanceInEth,
        chainId: parseInt(chainId, 16),
        isConnected: true,
      });

      // Listen for account changes
      window.ethereum.on('accountsChanged', (data: string | string[]) => {
        const accounts = Array.isArray(data) ? data : [data];
        if (accounts.length === 0) {
          disconnect();
        } else {
          setWalletInfo(prev => ({ ...prev, address: accounts[0] }));
        }
      });

      // Listen for chain changes
      window.ethereum.on('chainChanged', (data: string | string[]) => {
        const chainId = Array.isArray(data) ? data[0] : data;
        setWalletInfo(prev => ({ ...prev, chainId: parseInt(chainId, 16) }));
      });

    } catch (error) {
      console.error('Failed to connect wallet:', error);
      alert('Failed to connect wallet. Please try again.');
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const disconnect = useCallback(() => {
    setWalletInfo({
      address: '',
      balance: '0',
      chainId: 0,
      isConnected: false,
    });
  }, []);

  return {
    walletInfo,
    isConnecting,
    connect,
    disconnect,
  };
};