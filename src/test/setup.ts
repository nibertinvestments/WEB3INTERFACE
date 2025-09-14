import { afterEach, beforeAll, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// Note: @testing-library/jest-dom automatically extends expect

// Ensure global environment is properly set up for JSDOM
beforeAll(() => {
  // Ensure global object exists and has proper Map/WeakMap support
  if (typeof global !== 'undefined') {
    global.Map = global.Map || Map;
    global.WeakMap = global.WeakMap || WeakMap;
    global.Set = global.Set || Set;
    global.WeakSet = global.WeakSet || WeakSet;
  }

  // Ensure window object has proper constructors
  if (typeof window !== 'undefined') {
    window.Map = window.Map || Map;
    window.WeakMap = window.WeakMap || WeakMap;
    window.Set = window.Set || Set;
    window.WeakSet = window.WeakSet || WeakSet;
  }

  // Mock window.matchMedia
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  // Mock localStorage with proper error handling
  const localStorageMock = {
    getItem: vi.fn().mockImplementation(() => null),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
    length: 0,
    key: vi.fn().mockImplementation(() => null),
  };
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true,
  });

  // Mock sessionStorage too
  Object.defineProperty(window, 'sessionStorage', {
    value: localStorageMock,
    writable: true,
  });

  // Mock window.ethereum for wallet tests
  Object.defineProperty(window, 'ethereum', {
    value: {
      isMetaMask: true,
      request: vi.fn().mockResolvedValue([]),
      on: vi.fn(),
      removeListener: vi.fn(),
      removeAllListeners: vi.fn(),
      isConnected: vi.fn().mockReturnValue(false),
    },
    writable: true,
  });

  // Mock document.documentElement for theme tests with better error handling
  const mockClassList = {
    add: vi.fn(),
    remove: vi.fn(),
    contains: vi.fn().mockReturnValue(false),
    toggle: vi.fn(),
    replace: vi.fn(),
    length: 0,
    item: vi.fn(),
    toString: vi.fn().mockReturnValue(''),
    forEach: vi.fn(),
  };

  Object.defineProperty(document, 'documentElement', {
    value: {
      classList: mockClassList,
      getAttribute: vi.fn(),
      setAttribute: vi.fn(),
      removeAttribute: vi.fn(),
      hasAttribute: vi.fn().mockReturnValue(false),
    },
    writable: true,
    configurable: true,
  });

  // Mock IntersectionObserver
  global.IntersectionObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));

  // Mock ResizeObserver
  global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));
});

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
