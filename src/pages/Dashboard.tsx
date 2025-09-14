import React from 'react';
import { Card, Button } from '@/components';
import { useWallet } from '@/hooks';
import { formatNumber } from '@/utils';

const Dashboard: React.FC = () => {
  const { walletInfo } = useWallet();

  const mockData = {
    totalValue: 12345.67,
    portfolioChange: 2.5,
    transactions: 142,
    tokens: 8,
  };

  return (
    <div className='space-y-6'>
      {/* Welcome Section */}
      <div className='text-center'>
        <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-100'>
          Welcome to Web3 Interface
        </h1>
        <p className='mt-2 text-lg text-gray-600 dark:text-gray-400'>
          Your gateway to the decentralized web
        </p>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <Card className='text-center'>
          <div className='text-2xl font-bold text-primary-600 dark:text-primary-400'>
            ${formatNumber(mockData.totalValue)}
          </div>
          <div className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
            Total Portfolio Value
          </div>
        </Card>

        <Card className='text-center'>
          <div className='text-2xl font-bold text-success-600 dark:text-success-400'>
            +{formatNumber(mockData.portfolioChange)}%
          </div>
          <div className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
            24h Change
          </div>
        </Card>

        <Card className='text-center'>
          <div className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
            {mockData.transactions}
          </div>
          <div className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
            Total Transactions
          </div>
        </Card>

        <Card className='text-center'>
          <div className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
            {mockData.tokens}
          </div>
          <div className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
            Tokens Held
          </div>
        </Card>
      </div>

      {/* Main Content */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Quick Actions */}
        <Card title='Quick Actions' description='Common Web3 operations'>
          <div className='grid grid-cols-2 gap-4'>
            <Button variant='primary' className='h-20 flex-col'>
              <svg
                className='w-6 h-6 mb-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 4v16m8-8H4'
                />
              </svg>
              Send Tokens
            </Button>
            <Button variant='secondary' className='h-20 flex-col'>
              <svg
                className='w-6 h-6 mb-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 14l-7 7m0 0l-7-7m7 7V3'
                />
              </svg>
              Receive
            </Button>
            <Button variant='outline' className='h-20 flex-col'>
              <svg
                className='w-6 h-6 mb-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
                />
              </svg>
              Swap
            </Button>
            <Button variant='ghost' className='h-20 flex-col'>
              <svg
                className='w-6 h-6 mb-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                />
              </svg>
              Analytics
            </Button>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card title='Recent Activity' description='Your latest transactions'>
          {walletInfo.isConnected ? (
            <div className='space-y-3'>
              <div className='flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg'>
                <div className='flex items-center space-x-3'>
                  <div className='w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center'>
                    <svg
                      className='w-4 h-4 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 4v16m8-8H4'
                      />
                    </svg>
                  </div>
                  <div>
                    <div className='text-sm font-medium text-gray-900 dark:text-gray-100'>
                      Sent ETH
                    </div>
                    <div className='text-xs text-gray-600 dark:text-gray-400'>
                      2 hours ago
                    </div>
                  </div>
                </div>
                <div className='text-right'>
                  <div className='text-sm font-medium text-red-600 dark:text-red-400'>
                    -0.5 ETH
                  </div>
                  <div className='text-xs text-gray-600 dark:text-gray-400'>
                    $1,234.56
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg'>
                <div className='flex items-center space-x-3'>
                  <div className='w-8 h-8 bg-success-600 rounded-full flex items-center justify-center'>
                    <svg
                      className='w-4 h-4 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 14l-7 7m0 0l-7-7m7 7V3'
                      />
                    </svg>
                  </div>
                  <div>
                    <div className='text-sm font-medium text-gray-900 dark:text-gray-100'>
                      Received USDC
                    </div>
                    <div className='text-xs text-gray-600 dark:text-gray-400'>
                      1 day ago
                    </div>
                  </div>
                </div>
                <div className='text-right'>
                  <div className='text-sm font-medium text-success-600 dark:text-success-400'>
                    +100 USDC
                  </div>
                  <div className='text-xs text-gray-600 dark:text-gray-400'>
                    $100.00
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='text-center py-8'>
              <svg
                className='w-12 h-12 text-gray-400 mx-auto mb-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                />
              </svg>
              <p className='text-gray-600 dark:text-gray-400'>
                Connect your wallet to view recent activity
              </p>
            </div>
          )}
        </Card>
      </div>

      {/* Network Status */}
      <Card title='Network Status' description='Current blockchain information'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='text-center'>
            <div className='text-lg font-semibold text-success-600 dark:text-success-400'>
              Connected
            </div>
            <div className='text-sm text-gray-600 dark:text-gray-400'>
              Ethereum Mainnet
            </div>
          </div>
          <div className='text-center'>
            <div className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
              21 gwei
            </div>
            <div className='text-sm text-gray-600 dark:text-gray-400'>
              Gas Price
            </div>
          </div>
          <div className='text-center'>
            <div className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
              18,523,041
            </div>
            <div className='text-sm text-gray-600 dark:text-gray-400'>
              Latest Block
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
