import { renderHook, act } from '@testing-library/react';
import { expect, test, vi, beforeEach } from 'vitest';
import { useWallet } from './useWallet';

// Mock ethereum provider
const mockEthereum = {
  isMetaMask: true,
  request: vi.fn(),
  on: vi.fn(),
  removeListener: vi.fn(),
};

beforeEach(() => {
  vi.clearAllMocks();
  // Reset the ethereum mock
  Object.defineProperty(window, 'ethereum', {
    value: mockEthereum,
    writable: true,
  });
});

test('useWallet should initialize with default state', () => {
  const { result } = renderHook(() => useWallet());

  expect(result.current.walletInfo).toEqual({
    address: '',
    balance: '0',
    chainId: 0,
    isConnected: false,
  });
  expect(result.current.isConnecting).toBe(false);
});

test('useWallet should handle connection when ethereum is not available', async () => {
  // Mock window.ethereum as undefined
  Object.defineProperty(window, 'ethereum', {
    value: undefined,
    writable: true,
  });

  // Mock alert
  const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

  const { result } = renderHook(() => useWallet());

  await act(async () => {
    await result.current.connect();
  });

  expect(alertSpy).toHaveBeenCalledWith(
    'Please install MetaMask or another Web3 wallet!'
  );
  expect(result.current.walletInfo.isConnected).toBe(false);

  alertSpy.mockRestore();
});

test('useWallet should handle successful connection', async () => {
  const mockAccounts = ['0x1234567890123456789012345678901234567890'];
  const mockBalance = '0x1BC16D674EC80000'; // 2 ETH in hex
  const mockChainId = '0x1'; // Mainnet

  mockEthereum.request
    .mockResolvedValueOnce(mockAccounts) // eth_requestAccounts
    .mockResolvedValueOnce(mockBalance) // eth_getBalance
    .mockResolvedValueOnce(mockChainId); // eth_chainId

  const { result } = renderHook(() => useWallet());

  await act(async () => {
    await result.current.connect();
  });

  expect(result.current.walletInfo).toEqual({
    address: mockAccounts[0],
    balance: '2.0000',
    chainId: 1,
    isConnected: true,
  });
  expect(result.current.isConnecting).toBe(false);
});

test('useWallet should handle connection error', async () => {
  mockEthereum.request.mockRejectedValue(new Error('User denied access'));

  // Mock console.error and alert
  const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

  const { result } = renderHook(() => useWallet());

  await act(async () => {
    await result.current.connect();
  });

  expect(consoleSpy).toHaveBeenCalledWith(
    'Failed to connect wallet:',
    expect.any(Error)
  );
  expect(alertSpy).toHaveBeenCalledWith(
    'Failed to connect wallet. Please try again.'
  );
  expect(result.current.walletInfo.isConnected).toBe(false);
  expect(result.current.isConnecting).toBe(false);

  consoleSpy.mockRestore();
  alertSpy.mockRestore();
});

test('useWallet should handle disconnect', () => {
  const { result } = renderHook(() => useWallet());

  act(() => {
    result.current.disconnect();
  });

  expect(result.current.walletInfo).toEqual({
    address: '',
    balance: '0',
    chainId: 0,
    isConnected: false,
  });
});
