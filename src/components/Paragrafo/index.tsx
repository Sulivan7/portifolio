import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'pricipal' | 'secundario'
}

const Paragrafo = ({ children, tipo = 'pricipal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragrafo
