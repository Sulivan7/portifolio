import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'pricipal' | 'secundario'
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'pricipal', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
