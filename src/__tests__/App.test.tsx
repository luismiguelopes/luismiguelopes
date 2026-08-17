import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '@/App'

// O routing passou de react-router-dom v7 para react-router v8 e não tinha
// cobertura nenhuma. Renderiza-se o App real (e não uma cópia da tabela de
// rotas) para que uma alteração às rotas seja apanhada aqui.
const renderAt = (path: string) => {
  window.history.pushState({}, '', path)
  return render(<App />)
}

describe('App routing', () => {
  it('renders the portfolio at the root path', async () => {
    renderAt('/')

    expect(await screen.findByRole('heading', { level: 1 })).toHaveTextContent(
      /Luís Miguel Lopes/i
    )
  })

  it('renders the not-found page for an unknown path', async () => {
    renderAt('/does-not-exist')

    expect(await screen.findByText(/404/i)).toBeInTheDocument()
  })
})
