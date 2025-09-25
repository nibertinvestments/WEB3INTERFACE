import React from 'react';
import { cn } from '@/utils';
import { ModalProps } from '@/types';

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
      onClick={handleBackdropClick}
    >
      <div
        className={cn(
          'web3-card w-full mx-4 max-h-[90vh] overflow-y-auto',
          sizeClasses[size]
        )}
      >
        {title && (
          <div className='flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
              {title}
            </h3>
            <button
              onClick={onClose}
              className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        )}
        <div className={title ? 'p-6' : 'p-6'}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
