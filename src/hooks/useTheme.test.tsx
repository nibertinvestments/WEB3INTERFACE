import { renderHook, act } from '@testing-library/react';
import { expect, test, vi, beforeEach } from 'vitest';
import { useTheme } from './useTheme';

// Define proper types for mocks
interface MockStorage {
  getItem: ReturnType<typeof vi.fn>;
  setItem: ReturnType<typeof vi.fn>;
  removeItem: ReturnType<typeof vi.fn>;
  clear: ReturnType<typeof vi.fn>;
}

interface MockClassList {
  add: ReturnType<typeof vi.fn>;
  remove: ReturnType<typeof vi.fn>;
  contains: ReturnType<typeof vi.fn>;
  toggle: ReturnType<typeof vi.fn>;
}

beforeEach(() => {
  vi.clearAllMocks();

  // Reset localStorage mock
  const mockLocalStorage = window.localStorage as unknown as MockStorage;
  mockLocalStorage.getItem.mockClear();
  mockLocalStorage.setItem.mockClear();

  // Reset matchMedia mock
  const mockMatchMedia = window.matchMedia as unknown as ReturnType<
    typeof vi.fn
  >;
  mockMatchMedia.mockClear();

  // Reset document.documentElement.classList mock
  const mockClassList = document.documentElement
    .classList as unknown as MockClassList;
  mockClassList.add.mockClear();
  mockClassList.remove.mockClear();
});

test('useTheme should initialize with light theme by default', () => {
  const mockLocalStorage = window.localStorage as unknown as MockStorage;
  const mockMatchMedia = window.matchMedia as unknown as ReturnType<
    typeof vi.fn
  >;

  mockLocalStorage.getItem.mockReturnValue(null);
  mockMatchMedia.mockReturnValue({ matches: false });

  const { result } = renderHook(() => useTheme());

  expect(result.current.theme).toBe('light');
});

test('useTheme should initialize with dark theme when system prefers dark', () => {
  const mockLocalStorage = window.localStorage as unknown as MockStorage;
  const mockMatchMedia = window.matchMedia as unknown as ReturnType<
    typeof vi.fn
  >;

  mockLocalStorage.getItem.mockReturnValue(null);
  mockMatchMedia.mockReturnValue({ matches: true });

  const { result } = renderHook(() => useTheme());

  expect(result.current.theme).toBe('dark');
});

test('useTheme should use saved theme from localStorage', () => {
  const mockLocalStorage = window.localStorage as unknown as MockStorage;

  mockLocalStorage.getItem.mockReturnValue('dark');

  const { result } = renderHook(() => useTheme());

  expect(result.current.theme).toBe('dark');
});

test('useTheme should update theme and localStorage', () => {
  const mockLocalStorage = window.localStorage as unknown as MockStorage;

  mockLocalStorage.getItem.mockReturnValue('light');

  const { result } = renderHook(() => useTheme());

  act(() => {
    result.current.setTheme('dark');
  });

  expect(result.current.theme).toBe('dark');
  expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
    'web3-interface-theme',
    'dark'
  );
});

test('useTheme should handle system theme correctly', () => {
  const mockLocalStorage = window.localStorage as unknown as MockStorage;
  const mockMatchMedia = window.matchMedia as unknown as ReturnType<
    typeof vi.fn
  >;

  mockLocalStorage.getItem.mockReturnValue('light');
  mockMatchMedia.mockReturnValue({ matches: true });

  const { result } = renderHook(() => useTheme());

  act(() => {
    result.current.setTheme('system');
  });

  expect(result.current.theme).toBe('system');
  expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
    'web3-interface-theme',
    'system'
  );
});
