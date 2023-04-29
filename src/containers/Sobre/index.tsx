import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre min</Title>
    <Paragrafo tipo="secundaria">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
      consequatur quos, temporibus sequi perspiciatis eaque tempora magni, vitae
      doloremque recusandae nam dolorum laborum error ex est! Rem quibusdam
      accusantium corrupti?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=11joao44&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=11joao44&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
