import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

// Note: @testing-library/jest-dom automatically extends expect

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})