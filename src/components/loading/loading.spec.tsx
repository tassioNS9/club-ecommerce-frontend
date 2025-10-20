import { render } from '@testing-library/react'
import Loading from './loading.component'

// Teste básico para o componente Loading
// Verifica se a mensagem é exibida corretamente quando fornecida
describe('Loading', () => {
  it('should show a message if there is one', () => {
    const { getByText } = render(<Loading message="Aguarde..." />)

    getByText('Aguarde...')
  })
})
