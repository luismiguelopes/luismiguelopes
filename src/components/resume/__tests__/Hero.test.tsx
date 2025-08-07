import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from '../Hero'

describe('Hero Component', () => {
  it('renders hero section with name', () => {
    render(<Hero />)
    
    // Verifica se o nome está presente
    expect(screen.getByText(/Luís Miguel Lopes/i)).toBeInTheDocument()
  })

  it('renders hero section with professional title', () => {
    render(<Hero />)
    
    // Verifica se o título profissional está presente
    expect(screen.getByText(/Data Analyst Coordinator & Full-Stack Developer/i)).toBeInTheDocument()
  })

  it('renders contact buttons', () => {
    render(<Hero />)
    
    // Verifica se os botões de contato estão presentes
    expect(screen.getByText(/Download Resume/i)).toBeInTheDocument()
    expect(screen.getByText(/Contact Me/i)).toBeInTheDocument()
  })

  it('has proper semantic structure with headings', () => {
    render(<Hero />)
    
    // Verifica se há elementos de cabeçalho
    const headings = screen.getAllByRole('heading')
    expect(headings.length).toBeGreaterThan(0)
    
    // Verifica se o nome está em um h1
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Luís Miguel Lopes/i)
  })

  it('renders social media links', () => {
    render(<Hero />)
    
    // Verifica se os links das redes sociais estão presentes
    const links = screen.getAllByRole('link')
    const githubLink = links.find(link => link.getAttribute('href')?.includes('github'))
    const linkedinLink = links.find(link => link.getAttribute('href')?.includes('linkedin'))
    
    expect(githubLink).toHaveAttribute('href', 'https://github.com/luismiguelopes/')
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/luismiguelopes/')
  })
})