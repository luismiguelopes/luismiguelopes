import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import Navbar from '../Navbar'
import portfolioData from '@/data/portfolio.json'

const { navigation } = portfolioData

describe('Navbar', () => {
  it('links to every section listed in portfolio.json', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Main' })

    for (const { id, label } of navigation) {
      expect(within(nav).getByRole('link', { name: label })).toHaveAttribute('href', `#${id}`)
    }
  })

  it('opens and closes the mobile menu with the toggle button', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('mobile-nav')).toBeNull()

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle).toHaveAccessibleName('Close menu')
    expect(document.getElementById('mobile-nav')).not.toBeNull()

    fireEvent.click(toggle)
    expect(document.getElementById('mobile-nav')).toBeNull()
  })

  it('closes the mobile menu when a link is chosen', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    const menu = document.getElementById('mobile-nav') as HTMLElement
    fireEvent.click(within(menu).getByRole('link', { name: navigation[0].label }))

    expect(document.getElementById('mobile-nav')).toBeNull()
  })

  it('closes the mobile menu on Escape', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    fireEvent.keyDown(window, { key: 'Escape' })

    expect(document.getElementById('mobile-nav')).toBeNull()
  })
})
