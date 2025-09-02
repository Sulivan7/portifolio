import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre min</Titulo>
    <Paragrafo tipo="pricipal">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quidem
      reiciendis rem nostrum, adipisci error ut, deleniti voluptates quis,
      sapiente facere praesentium veniam ratione. Id ab aliquid nobis error
      voluptatem.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=sulivan7&show_icons=true&count_private=true&theme=tokyonight&hide_border=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=sulivan7&layout=compact&langs_count=5&theme=tokyonight&hide_border=true" />
    </GithubSecao>
  </section>
)

export default Sobre
