import { render } from '@testing-library/react'
import CustomButton from './custom-button.component'

// Nomespace for Custom Button component tests
// Está testando se o componente CustomButton renderiza corretamente com os filhos fornecidos
describe('Custom Button', () => {
  it('should render with correct children', () => {
    // O getByText é usado para verificar se o texto "lorem ipsum" está presente no componente renderizado
    const { getByText } = render(<CustomButton>lorem ipsum</CustomButton>)

    getByText('lorem ipsum')
  })
})
