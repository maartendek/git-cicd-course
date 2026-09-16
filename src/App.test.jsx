import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  it('renders the main heading', () => {
    render(<App />)
    const heading = screen.getByText(/Git CI\/CD Demo/i)
    expect(heading).toBeInTheDocument()
  })

  it('renders the hello world subtitle', () => {
    render(<App />)
    const subtitle = screen.getByText(/Hello World! from React/i)
    expect(subtitle).toBeInTheDocument()
  })

  it('renders the counter button with initial count of 0', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /Count is 0/i })
    expect(button).toBeInTheDocument()
  })

  it('increments counter when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /Count is 0/i })
    
    fireEvent.click(button)
    
    expect(screen.getByRole('button', { name: /Count is 1/i })).toBeInTheDocument()
  })

  it('increments counter multiple times', () => {
    render(<App />)
    const button = screen.getByRole('button')
    
    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)
    
    expect(screen.getByRole('button', { name: /Count is 3/i })).toBeInTheDocument()
  })

  it('renders the info section', () => {
    render(<App />)
    const infoHeading = screen.getByText(/About This Demo/i)
    expect(infoHeading).toBeInTheDocument()
  })

  it('displays all feature items', () => {
    render(<App />)
    expect(screen.getByText(/Built with React \+ Vite/i)).toBeInTheDocument()
    expect(screen.getByText(/Automated testing with Vitest/i)).toBeInTheDocument()
    expect(screen.getByText(/Code linting with ESLint/i)).toBeInTheDocument()
    expect(screen.getByText(/CI\/CD pipeline with GitHub Actions/i)).toBeInTheDocument()
  })
})
