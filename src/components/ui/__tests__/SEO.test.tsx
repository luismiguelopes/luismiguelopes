import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import SEO from '../SEO'

// O react-helmet-async foi removido: o React 19 iça <title>, <meta> e <link>
// para o <head> nativamente. Estes testes guardam esse comportamento, que de
// outra forma só se notaria em produção.
describe('SEO', () => {
  it('hoists the title into document head', async () => {
    render(<SEO />)

    await expect
      .poll(() => document.title)
      .toContain('Luís Miguel Lopes')
  })

  it('hoists meta and canonical link into document head', async () => {
    render(<SEO />)

    await expect
      .poll(() => document.head.querySelector('meta[name="description"]')?.getAttribute('content'))
      .toContain('Data Analyst Coordinator')

    await expect
      .poll(() => document.head.querySelector('meta[property="og:title"]')?.getAttribute('content'))
      .toContain('Luís Miguel Lopes')

    await expect
      .poll(() => document.head.querySelector('link[rel="canonical"]')?.getAttribute('href'))
      .toBe('https://luismiguelopes.com')
  })

  it('renders the JSON-LD structured data', () => {
    const { container } = render(<SEO />)

    const script = container.querySelector('script[type="application/ld+json"]')
    expect(script).toBeInTheDocument()

    const data = JSON.parse(script!.innerHTML)
    expect(data['@type']).toBe('Person')
    expect(data.name).toBe('Luís Miguel Lopes')
  })
})
