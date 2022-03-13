import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('<Card />', () => {
  test('renders all content', () => {
    render(
      <Card
        name="South Orchard"
        desc="The beautiful mix of apricots, apples and pears"
        count={3}
      />
    )

    const image = screen.getByRole('img', {
      name: /Orchard trees$/i,
    })
    expect(image).toBeInTheDocument()

    const heading = screen.getAllByRole('heading', {
      name: /south orchard$/i,
    })
    expect(heading).toHaveLength(1)

    const description = screen.getByText(
      /^the beautiful mix of apricots, apples and pears/i
    )
    expect(description).toBeInTheDocument()
  })
})
