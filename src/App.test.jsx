import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('renders title and increments count', () => {
  render(<App />)
  expect(screen.getByTestId('title')).toHaveTextContent('React Test Demo')

  const button = screen.getByRole('button', { name: /increment/i })
  fireEvent.click(button)

  expect(screen.getByTestId('count')).toHaveTextContent('count is 1')
})
