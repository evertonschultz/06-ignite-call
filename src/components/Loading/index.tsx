import { Spinner } from 'phosphor-react'
import { Container } from './styles'

export function Loading() {
  return (
    <Container>
      <Spinner size={24} />
    </Container>
  )
}
