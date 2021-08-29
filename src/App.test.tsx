import { render, screen } from '@testing-library/react'
import App from './App'

test('renders Aprendendo', () => {
  render(<App />)
  const linkElement = screen.getByText(/Aprendendo/i)
  expect(linkElement).toBeInTheDocument()
})
