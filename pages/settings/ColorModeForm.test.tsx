import { render, screen } from '@testing-library/react'
import ColorModeForm from './ColorModeForm'

describe('<ColorModeForm />', () => {
  it('renders light and dark radio buttons', () => {
    render(<ColorModeForm />)

    const radios = screen.getAllByRole('radio')
    expect(radios).toHaveLength(2)

    const lightRadio = screen.getByText(/Light/i)
    const darkRadio = screen.getByText(/Dark/i)
    expect(lightRadio).toBeInTheDocument()
    expect(darkRadio).toBeInTheDocument()
  })
})
