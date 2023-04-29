import Paragrafo from '../Paragrafo'
import Title from '../Title'
import { Card, LinkBottom } from './styles'

const Projeto = () => (
  <Card>
    <Title fontSize={16}>Projeto Lista de tarefas</Title>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJs</Paragrafo>
    <LinkBottom>Visualizar</LinkBottom>
  </Card>
)

export default Projeto
