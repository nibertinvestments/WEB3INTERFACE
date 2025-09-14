import React from 'react';
import { useTheme } from '@/hooks';
import WalletConnect from '@/components/WalletConnect';

interface HeaderProps {
  walletProps: {
    isConnected: boolean;
    address?: string;
    balance?: string;
    onConnect: () => void;
    onDisconnect: () => void;
  };
}

const Header: React.FC<HeaderProps> = ({ walletProps }) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold gradient-text">
                Web3 Interface
              </h1>
            </div>
            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              <a
                href="#"
                className="text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 text-sm font-medium"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 px-3 py-2 text-sm font-medium"
              >
                Transactions
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 px-3 py-2 text-sm font-medium"
              >
                Tokens
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 px-3 py-2 text-sm font-medium"
              >
                Settings
              </a>
            </nav>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Wallet Connect */}
            <WalletConnect {...walletProps} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;