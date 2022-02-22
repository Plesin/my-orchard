import { render, screen } from '@testing-library/react'
import SettingsForm from './index'

describe('<SettingsForm />', () => {
  it('renders light and dark radio buttons', () => {
    render(<SettingsForm />)

    const radios = screen.getAllByRole('radio')
    expect(radios).toHaveLength(2)

    const lightRadio = screen.getByText(/Light/i)
    const darkRadio = screen.getByText(/Dark/i)
    expect(lightRadio).toBeInTheDocument()
    expect(darkRadio).toBeInTheDocument()
  })
})
