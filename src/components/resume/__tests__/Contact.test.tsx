import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import Contact from '../Contact'
import { useAppStore } from '@/store/useAppStore'
import emailjs from '@emailjs/browser'

vi.mock('@emailjs/browser', () => ({
  default: { send: vi.fn() }
}))

vi.mock('@/store/useAppStore', () => ({
  useAppStore: vi.fn()
}))

const mockSetContactForm = vi.fn()

const baseStore = () => ({
  contactForm: { name: '', email: '', message: '' },
  setContactForm: mockSetContactForm,
  resetContactForm: vi.fn(),
  trackEvent: vi.fn(),
} as ReturnType<typeof useAppStore>)

describe('Contact Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useAppStore).mockReturnValue(baseStore())
  })

  it('renders contact section with title', () => {
    render(<Contact />)

    expect(screen.getByText(/Let's Work Together/i)).toBeInTheDocument()
    expect(screen.getByText(/Ready to discuss your next project/i)).toBeInTheDocument()
  })

  it('renders contact form with all fields', () => {
    render(<Contact />)

    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Contact />)

    expect(screen.getByText(/geral@luismiguelopes.com/i)).toBeInTheDocument()
    expect(screen.getByText(/Portugal/i)).toBeInTheDocument()
  })

  it('validates required fields', async () => {
    render(<Contact />)

    const submitButton = screen.getByRole('button', { name: /Send Message/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/Name is required/i)).toBeInTheDocument()
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument()
      expect(screen.getByText(/Message is required/i)).toBeInTheDocument()
    })
  })

  it('validates email format', async () => {
    vi.mocked(useAppStore).mockReturnValue({
      ...baseStore(),
      contactForm: { name: 'John Doe', email: 'invalid-email', message: 'Hello, this is a test message.' },
    } as ReturnType<typeof useAppStore>)

    render(<Contact />)

    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }))

    await waitFor(() => {
      expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument()
    })
  })

  it('submits form with valid data', async () => {
    vi.mocked(emailjs.send).mockResolvedValue({} as never)
    vi.mocked(useAppStore).mockReturnValue({
      ...baseStore(),
      contactForm: { name: 'John Doe', email: 'john@example.com', message: 'Hello, this is a test message.' },
    } as ReturnType<typeof useAppStore>)

    render(<Contact />)

    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }))

    await waitFor(() => {
      expect(screen.queryByText(/Name is required/i)).not.toBeInTheDocument()
    })
  })

  it('renders "Why Work With Me?" section', () => {
    render(<Contact />)

    expect(screen.getByText(/Why Work With Me?/i)).toBeInTheDocument()
    expect(screen.getByText(/\d+\+ years of experience in data analysis and web development/i)).toBeInTheDocument()
    expect(screen.getByText(/Full-stack expertise with modern technologies/i)).toBeInTheDocument()
    expect(screen.getByText(/Proven track record with 11\+ successful projects/i)).toBeInTheDocument()
  })

  it('displays success message when form is submitted successfully', async () => {
    vi.mocked(emailjs.send).mockResolvedValue({} as never)
    vi.mocked(useAppStore).mockReturnValue({
      ...baseStore(),
      contactForm: { name: 'John Doe', email: 'john@example.com', message: 'Hello, this is a test message.' },
    } as ReturnType<typeof useAppStore>)

    render(<Contact />)

    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }))

    await waitFor(() => {
      expect(screen.getByText(/Message sent successfully!/i)).toBeInTheDocument()
    })
  })

  it('displays error message when form submission fails', async () => {
    vi.mocked(emailjs.send).mockRejectedValue(new Error('Network error'))
    vi.mocked(useAppStore).mockReturnValue({
      ...baseStore(),
      contactForm: { name: 'John Doe', email: 'john@example.com', message: 'Hello, this is a test message.' },
    } as ReturnType<typeof useAppStore>)

    render(<Contact />)

    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }))

    await waitFor(() => {
      expect(screen.getByText(/Failed to send message/i)).toBeInTheDocument()
    })
  })
})
