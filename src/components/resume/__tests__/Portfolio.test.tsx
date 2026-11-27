import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import Portfolio from '../Portfolio'
import { useAppStore } from '@/store/useAppStore'
import portfolioData from '@/data/portfolio.json'

// Mock do store
const mockSetPortfolioFilter = vi.fn()

vi.mock('@/store/useAppStore', () => ({
  useAppStore: vi.fn()
}))

describe('Portfolio Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useAppStore).mockReturnValue({
      portfolioFilter: { category: 'all', technology: 'all' },
      setPortfolioFilter: mockSetPortfolioFilter
    } as ReturnType<typeof useAppStore>)
  })

  it('renders portfolio section with title', () => {
    render(<Portfolio />)

    expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument()
    expect(screen.getByText(/A showcase of my latest work/i)).toBeInTheDocument()
  })

  it('displays all projects by default', () => {
    render(<Portfolio />)

    expect(screen.getByRole('heading', { name: /Ikabot Dashboard/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Ikabot \(Contributor\)/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Anko Scripts/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /luismiguelopes\.com/i })).toBeInTheDocument()
  })

  it('renders filter buttons for categories', () => {
    render(<Portfolio />)

    expect(screen.getByRole('button', { name: /^All$/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Web Dev/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^Automation$/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^DevOps$/i })).toBeInTheDocument()
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

    expect(screen.getByText(`Showing ${portfolioData.projects.length} of ${portfolioData.projects.length} projects`)).toBeInTheDocument()
  })

  it('renders project cards with proper information', () => {
    render(<Portfolio />)

    // Verifica se os cards dos projetos têm as informações necessárias
    expect(screen.getByRole('heading', { name: /Anko Scripts/i })).toBeInTheDocument()
    expect(screen.getByText(/Collection of scripts written in Anko/i)).toBeInTheDocument()

    // Verifica se as tecnologias são exibidas como badges
    expect(screen.getAllByText(/Go/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Automation/i).length).toBeGreaterThan(0)
  })

  // Real links (not window.open buttons) so they can be crawled, middle-clicked
  // and copied, and the opened page gets no handle on this tab.
  const expectExternalLink = (link: HTMLElement, href: string) => {
    expect(link.tagName).toBe('A')
    expect(link).toHaveAttribute('href', href)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  }

  it('renders a Code link for every project with a public repository', () => {
    render(<Portfolio />)

    const withRepo = portfolioData.projects.filter(p => p.githubUrl !== '#')
    for (const project of withRepo) {
      const link = screen.getByRole('link', { name: `Code: ${project.title} on GitHub (opens in a new tab)` })
      expectExternalLink(link, project.githubUrl)
    }
    expect(screen.getAllByRole('link', { name: /^Code:/ })).toHaveLength(withRepo.length)
  })

  it('renders a Live Demo link only for projects with a live URL', () => {
    render(<Portfolio />)

    const withDemo = portfolioData.projects.filter(p => p.liveUrl !== '#')
    for (const project of withDemo) {
      const link = screen.getByRole('link', { name: `Live Demo: ${project.title} (opens in a new tab)` })
      expectExternalLink(link, project.liveUrl)
    }
    expect(screen.getAllByRole('link', { name: /^Live Demo:/ })).toHaveLength(withDemo.length)
  })

  it('links to the full GitHub profile', () => {
    render(<Portfolio />)

    expectExternalLink(
      screen.getByRole('link', { name: /View All Projects on GitHub/i }),
      'https://github.com/luismiguelopes'
    )
  })
})