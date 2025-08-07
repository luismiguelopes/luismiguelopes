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
    ;(useAppStore as any).mockReturnValue({
      contactForm: {
        isSubmitting: false,
        submitStatus: null,
        errors: {}
      },
      setContactForm: mockSetContactForm
    })
  })

  it('renders contact section with title', () => {
    render(<Contact />)
    
    expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument()
    expect(screen.getByText(/Ready to work together/i)).toBeInTheDocument()
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
    
    expect(screen.getByText(/luismiguelopes@gmail.com/i)).toBeInTheDocument()
    expect(screen.getByText(/Porto, Portugal/i)).toBeInTheDocument()
  })

  it('validates required fields', async () => {
    render(<Contact />)
    
    const submitButton = screen.getByRole('button', { name: /Send Message/i })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(mockSetContactForm).toHaveBeenCalledWith({
        errors: {
          name: 'Name is required',
          email: 'Email is required',
          message: 'Message is required'
        }
      })
    })
  })

  it('validates email format', async () => {
    render(<Contact />)
    
    const emailInput = screen.getByLabelText(/Email/i)
    const submitButton = screen.getByRole('button', { name: /Send Message/i })
    
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(mockSetContactForm).toHaveBeenCalledWith(
        expect.objectContaining({
          errors: expect.objectContaining({
            email: 'Please enter a valid email address'
          })
        })
      )
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
      expect(mockSetContactForm).toHaveBeenCalledWith({
        isSubmitting: true,
        errors: {}
      })
    })
  })

  it('renders "Why Work With Me?" section', () => {
    render(<Contact />)
    
    expect(screen.getByText(/Why Work With Me?/i)).toBeInTheDocument()
    expect(screen.getByText(/Full-Stack Expertise/i)).toBeInTheDocument()
    expect(screen.getByText(/Data-Driven Approach/i)).toBeInTheDocument()
    expect(screen.getByText(/Problem Solver/i)).toBeInTheDocument()
  })

  it('displays success message when form is submitted successfully', () => {
    ;(useAppStore as any).mockReturnValue({
      contactForm: {
        isSubmitting: false,
        submitStatus: 'success',
        errors: {}
      },
      setContactForm: mockSetContactForm
    })

    render(<Contact />)
    
    expect(screen.getByText(/Message sent successfully!/i)).toBeInTheDocument()
  })

  it('displays error message when form submission fails', () => {
    ;(useAppStore as any).mockReturnValue({
      contactForm: {
        isSubmitting: false,
        submitStatus: 'error',
        errors: {}
      },
      setContactForm: mockSetContactForm
    })

    render(<Contact />)
    
    expect(screen.getByText(/Failed to send message/i)).toBeInTheDocument()
  })
})