import { Titulo as TituloEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (Props: Props) => (
  <TituloEstilo fontSize={Props.fontSize}>{Props.children}</TituloEstilo>
)

export default Titulo
