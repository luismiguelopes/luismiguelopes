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
    ;(useAppStore as any).mockReturnValue({
      portfolioFilter: { category: 'all', technology: 'all' },
      setPortfolioFilter: mockSetPortfolioFilter
    })
  })

  it('renders portfolio section with title', () => {
    render(<Portfolio />)
    
    expect(screen.getByText(/Portfolio/i)).toBeInTheDocument()
    expect(screen.getByText(/Alguns dos meus projetos mais relevantes/i)).toBeInTheDocument()
  })

  it('displays all projects by default', () => {
    render(<Portfolio />)
    
    // Verifica se os projetos estão sendo exibidos
    expect(screen.getByText(/E-commerce Platform/i)).toBeInTheDocument()
    expect(screen.getByText(/Task Management App/i)).toBeInTheDocument()
    expect(screen.getByText(/Data Analytics Dashboard/i)).toBeInTheDocument()
  })

  it('renders filter buttons for categories', () => {
    render(<Portfolio />)
    
    expect(screen.getByText(/All/i)).toBeInTheDocument()
    expect(screen.getByText(/Web Development/i)).toBeInTheDocument()
    expect(screen.getByText(/Data Analytics/i)).toBeInTheDocument()
    expect(screen.getByText(/Mobile/i)).toBeInTheDocument()
  })

  it('renders technology filter dropdown', () => {
    render(<Portfolio />)
    
    expect(screen.getByText(/Filter by Technology/i)).toBeInTheDocument()
  })

  it('calls setPortfolioFilter when category button is clicked', () => {
    render(<Portfolio />)
    
    const webDevButton = screen.getByText(/Web Development/i)
    fireEvent.click(webDevButton)
    
    expect(mockSetPortfolioFilter).toHaveBeenCalledWith({ category: 'Web Development' })
  })

  it('displays project count', () => {
    render(<Portfolio />)
    
    expect(screen.getByText(/Showing 4 projects/i)).toBeInTheDocument()
  })

  it('renders project cards with proper information', () => {
    render(<Portfolio />)
    
    // Verifica se os cards dos projetos têm as informações necessárias
    expect(screen.getByText(/E-commerce Platform/i)).toBeInTheDocument()
    expect(screen.getByText(/Plataforma completa de e-commerce/i)).toBeInTheDocument()
    
    // Verifica se as tecnologias são exibidas como badges
    expect(screen.getByText(/React/i)).toBeInTheDocument()
    expect(screen.getByText(/TypeScript/i)).toBeInTheDocument()
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