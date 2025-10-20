import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Colors from '../../theme/theme.colors'
import CustomInput from './custom-input.component'

describe('Custom Input', () => {
  // Testa se o componente CustomInput renderiza com erro quando a prop hasError é verdadeira
  // e sem erro quando a prop hasError é falsa
  it('should render with error if hasError is true', () => {
    const { getByPlaceholderText } = render(
      <CustomInput placeholder="Lorem Ipsum" hasError={true} />
    )

    const input = getByPlaceholderText('Lorem Ipsum')

    expect(input).toHaveStyle({ border: `2px solid ${Colors.error}` })
  })

  it('should render without error if hasError is false', () => {
    const { getByPlaceholderText } = render(
      <CustomInput placeholder="Lorem Ipsum" hasError={false} />
    )

    const input = getByPlaceholderText('Lorem Ipsum')

    expect(input).toHaveStyle({ border: 'none' })
  })

  // Testa se o valor do input muda corretamente quando o usuário digita
  it('should change value when user types', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(
      <CustomInput placeholder="Lorem Ipsum" hasError={false} />
    )

    const input = getByPlaceholderText('Lorem Ipsum')
    // O userEvent.type simula a digitação do texto "Dolor Sit" no input
    userEvent.type(input, 'Dolor Sit')

    getByDisplayValue('Dolor Sit')
  })
})
