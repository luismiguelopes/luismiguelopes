import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock do IntersectionObserver para testes.
// Tem de ser uma classe: o Vitest 4 rejeita mockReturnValue em algo chamado
// com `new`, e estes observers são instanciados pelos componentes.
class MockIntersectionObserver implements IntersectionObserver {
  readonly root = null
  readonly rootMargin = ''
  readonly thresholds = []
  observe = () => null
  unobserve = () => null
  disconnect = () => null
  takeRecords = () => []
}
window.IntersectionObserver = MockIntersectionObserver
global.IntersectionObserver = MockIntersectionObserver

// Mock do ResizeObserver para testes
class MockResizeObserver implements ResizeObserver {
  observe = () => null
  unobserve = () => null
  disconnect = () => null
}
window.ResizeObserver = MockResizeObserver
global.ResizeObserver = MockResizeObserver

// Mock do matchMedia para testes
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
})