import React, { useState } from 'react';
import { truncateAddress, copyToClipboard } from '@/utils';
import Button from './Button';
import Modal from './Modal';

interface WalletConnectProps {
  isConnected: boolean;
  address?: string;
  balance?: string;
  onConnect: () => void;
  onDisconnect: () => void;
}

const WalletConnect: React.FC<WalletConnectProps> = ({
  isConnected,
  address,
  balance,
  onConnect,
  onDisconnect,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    if (address && await copyToClipboard(address)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isConnected) {
    return (
      <Button onClick={onConnect} variant="primary">
        Connect Wallet
      </Button>
    );
  }

  return (
    <>
      <div className="flex items-center space-x-3">
        <div className="text-right">
          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {balance} ETH
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            {truncateAddress(address || '')}
          </div>
        </div>
        <Button
          onClick={() => setShowModal(true)}
          variant="secondary"
          size="sm"
        >
          Account
        </Button>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Account Details"
        size="sm"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Wallet Address
            </label>
            <div className="flex items-center space-x-2">
              <div className="flex-1 web3-input bg-gray-50 dark:bg-gray-800 font-mono text-xs">
                {address}
              </div>
              <Button
                onClick={handleCopyAddress}
                variant="secondary"
                size="sm"
              >
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Balance
            </label>
            <div className="web3-input bg-gray-50 dark:bg-gray-800">
              {balance} ETH
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <Button
              onClick={() => {
                setShowModal(false);
                onDisconnect();
              }}
              variant="outline"
              className="flex-1"
            >
              Disconnect
            </Button>
            <Button
              onClick={() => setShowModal(false)}
              variant="primary"
              className="flex-1"
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default WalletConnect;