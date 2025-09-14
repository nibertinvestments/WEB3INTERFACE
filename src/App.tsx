import React from 'react';
import { Header, Footer } from '@/layouts';
import { Dashboard } from '@/pages';
import { useWallet } from '@/hooks';
import '@/index.css';

const App: React.FC = () => {
  const { walletInfo, connect, disconnect } = useWallet();

  const walletProps = {
    isConnected: walletInfo.isConnected,
    address: walletInfo.address,
    balance: walletInfo.balance,
    onConnect: connect,
    onDisconnect: disconnect,
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header walletProps={walletProps} />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Dashboard />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;