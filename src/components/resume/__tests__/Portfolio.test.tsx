import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import Portfolio from '../Portfolio'
import { useAppStore } from '@/store/useAppStore'

// Mock do store
const mockSetPortfolioFilter = vi.fn()

vi.mock('@/store/useAppStore', () => ({
  useAppStore: vi.fn()
}))

describe('Portfolio Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
      ; (useAppStore as any).mockReturnValue({
        portfolioFilter: { category: 'all', technology: 'all' },
        setPortfolioFilter: mockSetPortfolioFilter
      })
  })

  it('renders portfolio section with title', () => {
    render(<Portfolio />)

    expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument()
    expect(screen.getByText(/A showcase of my latest work/i)).toBeInTheDocument()
  })

  it('displays all projects by default', () => {
    render(<Portfolio />)

    // Verifica se os projetos estão sendo exibidos
    expect(screen.getByRole('heading', { name: /Anko Scripts/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Ikabot Fork/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /luismiguelopes Website/i })).toBeInTheDocument()
  })

  it('renders filter buttons for categories', () => {
    render(<Portfolio />)

    expect(screen.getByRole('button', { name: /^All$/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Web Dev/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Automation/i })).toBeInTheDocument()
  })

  it('renders technology filter dropdown', () => {
    render(<Portfolio />)

    expect(screen.getByLabelText(/Filter projects by technology/i)).toBeInTheDocument()
  })

  it('calls setPortfolioFilter when category button is clicked', () => {
    render(<Portfolio />)

    const webDevButton = screen.getByRole('button', { name: /Web Dev/i })
    fireEvent.click(webDevButton)

    expect(mockSetPortfolioFilter).toHaveBeenCalledWith({ category: 'web' })
  })

  it('displays project count', () => {
    render(<Portfolio />)

    expect(screen.getByText(/Showing 3 of 3 projects/i)).toBeInTheDocument()
  })

  it('renders project cards with proper information', () => {
    render(<Portfolio />)

    // Verifica se os cards dos projetos têm as informações necessárias
    expect(screen.getByRole('heading', { name: /Anko Scripts/i })).toBeInTheDocument()
    expect(screen.getByText(/Anko Scripts is a collection of automation scripts/i)).toBeInTheDocument()

    // Verifica se as tecnologias são exibidas como badges
    expect(screen.getAllByText(/Go/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Automation/i).length).toBeGreaterThan(0)
  })

  it('renders external buttons for projects', () => {
    render(<Portfolio />)

    // Verifica se os botões de GitHub estão presentes
    const githubButtons = screen.getAllByText(/Code/i)
    expect(githubButtons.length).toBeGreaterThan(0)

    // Verifica se há botão para ver todos os projetos
    expect(screen.getByText(/View All Projects on GitHub/i)).toBeInTheDocument()
  })
})