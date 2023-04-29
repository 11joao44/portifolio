import Title from '../../components/Title'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { Description, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>João Pedro</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        11joao44
      </Paragrafo>
      <Description tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Description>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
