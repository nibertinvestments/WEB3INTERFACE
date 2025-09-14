# GitHub Copilot Instructions for Web3 Interface

This document provides comprehensive instructions for GitHub Copilot to understand and assist with the Web3 Interface project.

## Project Overview

This is a comprehensive Web3 user interface built with React, TypeScript, and modern web technologies. It serves as a foundation for decentralized applications with wallet integration, transaction management, and blockchain interaction capabilities.

## Tech Stack & Dependencies

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Web3**: Ethers.js, Wagmi (planned), Viem
- **Testing**: Vitest with React Testing Library
- **Code Quality**: ESLint + Prettier + TypeScript strict mode

## Project Structure

```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks for Web3 and app logic
├── layouts/       # Header, Footer, and layout components
├── pages/         # Main page components
├── types/         # TypeScript type definitions
├── utils/         # Utility functions and helpers
├── config/        # Application configuration
└── test/          # Testing setup and utilities
```

## Code Style Guidelines

### TypeScript Usage

- Use strict TypeScript configuration
- Define interfaces for all props and complex objects
- Use proper typing for Web3 interactions
- Avoid `any` type - use specific types or `unknown`

### React Patterns

- Use functional components exclusively
- Implement custom hooks for reusable logic
- Use proper dependency arrays in hooks
- Follow React best practices for performance

### Component Architecture

```typescript
// Preferred component structure
interface ComponentProps {
  // Define all props with proper types
  title: string;
  isVisible?: boolean;
  onAction: (value: string) => void;
}

const Component: React.FC<ComponentProps> = ({
  title,
  isVisible = true,
  onAction,
}) => {
  // Component implementation
};
```

### Styling Guidelines

- Use Tailwind CSS classes
- Utilize custom utility classes: `web3-card`, `web3-button-*`, `web3-input`
- Support dark mode with `dark:` prefixes
- Use responsive design with mobile-first approach

## Web3 Integration Patterns

### Wallet Connection

```typescript
// Use the useWallet hook for wallet operations
const { walletInfo, connect, disconnect, isConnecting } = useWallet();

// Handle wallet state properly
if (!walletInfo.isConnected) {
  return <Button onClick={connect}>Connect Wallet</Button>;
}
```

### Transaction Handling

```typescript
// Always handle errors and loading states
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

const handleTransaction = async () => {
  setIsLoading(true);
  setError(null);

  try {
    // Transaction logic
    const tx = await sendTransaction(params);
    // Handle success
  } catch (err) {
    setError(getErrorMessage(err));
  } finally {
    setIsLoading(false);
  }
};
```

### Address and Input Validation

```typescript
// Use utility functions for validation
import { isValidAddress, formatEther, truncateAddress } from '@/utils';

// Validate before processing
if (!isValidAddress(address)) {
  throw new Error('Invalid Ethereum address');
}
```

## Common Patterns to Follow

### Error Handling

```typescript
// Use consistent error handling
try {
  await operation();
} catch (error) {
  const message = getErrorMessage(error);
  setError(message);
  // Optional: Log to error tracking service
}
```

### Loading States

```typescript
// Implement proper loading states
const [isLoading, setIsLoading] = useState(false);

return (
  <Button loading={isLoading} onClick={handleAction}>
    {isLoading ? 'Processing...' : 'Submit'}
  </Button>
);
```

### Form Handling

```typescript
// Use controlled components with validation
const [formData, setFormData] = useState({ amount: '', recipient: '' });
const [errors, setErrors] = useState<Record<string, string>>({});

const validateForm = () => {
  const newErrors: Record<string, string> = {};

  if (!formData.amount || parseFloat(formData.amount) <= 0) {
    newErrors.amount = 'Please enter a valid amount';
  }

  if (!isValidAddress(formData.recipient)) {
    newErrors.recipient = 'Please enter a valid address';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
```

## Security Best Practices

### Input Validation

- Always validate user inputs
- Use proper type checking
- Sanitize data before processing
- Validate Ethereum addresses and amounts

### Wallet Security

- Never store private keys
- Use wallet provider for signing
- Validate transaction parameters
- Handle user rejections gracefully

### XSS Prevention

- Avoid `dangerouslySetInnerHTML`
- Sanitize dynamic content
- Use proper escaping for user data

## Testing Guidelines

### Component Testing

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, vi } from 'vitest';

test('should handle button click', async () => {
  const mockOnClick = vi.fn();
  render(<Button onClick={mockOnClick}>Click me</Button>);

  const button = screen.getByRole('button');
  await fireEvent.click(button);

  expect(mockOnClick).toHaveBeenCalledOnce();
});
```

### Hook Testing

```typescript
import { renderHook, act } from '@testing-library/react';
import { useWallet } from '@/hooks';

test('useWallet should connect wallet', async () => {
  const { result } = renderHook(() => useWallet());

  await act(async () => {
    await result.current.connect();
  });

  expect(result.current.walletInfo.isConnected).toBe(true);
});
```

## Common File Templates

### New Component Template

```typescript
import React from 'react';
import { cn } from '@/utils';

interface NewComponentProps {
  children: React.ReactNode;
  className?: string;
  // Add other props as needed
}

const NewComponent: React.FC<NewComponentProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('base-styles', className)}>
      {children}
    </div>
  );
};

export default NewComponent;
```

### New Hook Template

```typescript
import { useState, useCallback } from 'react';

interface UseNewHookReturn {
  data: any;
  loading: boolean;
  error: string | null;
  action: () => Promise<void>;
}

export const useNewHook = (): UseNewHookReturn => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const action = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Implementation
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, action };
};
```

### New Page Template

```typescript
import React from 'react';
import { Card, Button } from '@/components';
import { useWallet } from '@/hooks';

const NewPage: React.FC = () => {
  const { walletInfo } = useWallet();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Page Title
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Page description
        </p>
      </div>

      <Card title="Section Title">
        {/* Page content */}
      </Card>
    </div>
  );
};

export default NewPage;
```

## Utility Functions Usage

### String Formatting

```typescript
import {
  formatNumber,
  formatCurrency,
  formatEther,
  truncateAddress,
} from '@/utils';

// Format numbers
const displayAmount = formatNumber(1234.567, 2); // "1,234.57"

// Format currency
const price = formatCurrency(123.45); // "$123.45"

// Format Wei to Ether
const ethAmount = formatEther('1000000000000000000'); // "1.0000"

// Truncate addresses
const shortAddress = truncateAddress('0x742...46f3'); // "0x742...46f3"
```

### Validation

```typescript
import { isValidAddress, isValidPrivateKey } from '@/utils';

// Validate Ethereum address
if (isValidAddress(userInput)) {
  // Process valid address
}

// Check for valid private key format
if (isValidPrivateKey(input)) {
  // Handle private key (never store it!)
}
```

## Configuration Usage

```typescript
import { SUPPORTED_NETWORKS, APP_CONFIG, FEATURES } from '@/config';

// Check if feature is enabled
if (FEATURES.MULTI_CHAIN) {
  // Multi-chain functionality
}

// Get network information
const network = SUPPORTED_NETWORKS[chainId];
if (network) {
  console.log(`Connected to ${network.name}`);
}
```

## Performance Considerations

### Memoization

```typescript
import { useMemo, useCallback } from 'react';

// Memoize expensive calculations
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

// Memoize callbacks
const handleClick = useCallback(() => {
  onAction(value);
}, [onAction, value]);
```

### Lazy Loading

```typescript
import { lazy, Suspense } from 'react';

// Lazy load components
const HeavyComponent = lazy(() => import('./HeavyComponent'));

// Use with Suspense
<Suspense fallback={<div>Loading...</div>}>
  <HeavyComponent />
</Suspense>
```

## Common Issues and Solutions

### Web3 Provider Issues

```typescript
// Check for provider availability
if (typeof window.ethereum === 'undefined') {
  alert('Please install MetaMask!');
  return;
}

// Handle account changes
useEffect(() => {
  if (window.ethereum) {
    window.ethereum.on('accountsChanged', handleAccountsChanged);
    return () => {
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
    };
  }
}, []);
```

### Network Switching

```typescript
// Request network switch
const switchNetwork = async (chainId: number) => {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: `0x${chainId.toString(16)}` }],
    });
  } catch (error) {
    // Handle switch error
  }
};
```

## Documentation Requirements

When creating new features:

1. Add JSDoc comments for complex functions
2. Update type definitions in `src/types/`
3. Add examples to component documentation
4. Update README.md if adding major features
5. Include tests for new functionality

## Deployment Considerations

- Ensure all environment variables are properly configured
- Test with different wallet providers
- Verify responsive design on various devices
- Check performance with large datasets
- Validate accessibility compliance

This documentation should help GitHub Copilot understand the project structure, coding patterns, and best practices to provide more accurate and helpful suggestions.
