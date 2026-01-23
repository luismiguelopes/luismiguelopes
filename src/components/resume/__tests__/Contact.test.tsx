import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import Contact from '../Contact'
import { useAppStore } from '@/store/useAppStore'

// Mock do store
const mockSetContactForm = vi.fn()

vi.mock('@/store/useAppStore', () => ({
  useAppStore: vi.fn()
}))

describe('Contact Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
      ; (useAppStore as any).mockReturnValue({
        contactForm: {
          name: '',
          email: '',
          message: ''
        },
        setContactForm: mockSetContactForm,
        resetContactForm: vi.fn(),
        trackEvent: vi.fn()
      })
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
    render(<Contact />)

    const emailInput = screen.getByLabelText(/Email/i)
    const submitButton = screen.getByRole('button', { name: /Send Message/i })

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument()
    })
  })

  it('submits form with valid data', async () => {
    render(<Contact />)

    const nameInput = screen.getByLabelText(/Name/i)
    const emailInput = screen.getByLabelText(/Email/i)
    const messageInput = screen.getByLabelText(/Message/i)
    const submitButton = screen.getByRole('button', { name: /Send Message/i })

    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } })

    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.queryByText(/Name is required/i)).not.toBeInTheDocument()
    })
  })

  it('renders "Why Work With Me?" section', () => {
    render(<Contact />)

    expect(screen.getByText(/Why Work With Me?/i)).toBeInTheDocument()
    expect(screen.getByText(/8\+ years of experience in automation and web development/i)).toBeInTheDocument()
    expect(screen.getByText(/Full-stack expertise with modern technologies/i)).toBeInTheDocument()
    expect(screen.getByText(/Proven track record with 20\+ successful projects/i)).toBeInTheDocument()
  })

  it('displays success message when form is submitted successfully', () => {
    ; (useAppStore as any).mockReturnValue({
      contactForm: {
        name: '',
        email: '',
        message: ''
      },
      submitStatus: 'success',
      setContactForm: mockSetContactForm,
      resetContactForm: vi.fn(),
      trackEvent: vi.fn()
    })

    render(<Contact />)

    expect(screen.getByText(/Message sent successfully!/i)).toBeInTheDocument()
  })

  it('displays error message when form submission fails', () => {
    ; (useAppStore as any).mockReturnValue({
      contactForm: {
        name: '',
        email: '',
        message: ''
      },
      submitStatus: 'error',
      setContactForm: mockSetContactForm,
      resetContactForm: vi.fn(),
      trackEvent: vi.fn()
    })

    render(<Contact />)

    expect(screen.getByText(/Failed to send message/i)).toBeInTheDocument()
  })
})