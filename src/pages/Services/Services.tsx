import { Container } from '@chakra-ui/react'

import ItemBox from '../../components/ItemBox/ItemBox'
import Contact from '../../components/Contact/Contact'

import ImageItem1 from "../../assets/PersianaItem1.webp"
import ImageItem2 from "../../assets/CortinarItem2.webp"
import ImageItem3 from "../../assets/RedeItem3.webp"
import ImageItem4 from "../../assets/PeliculaItem4.webp"

function Services() {
  return (
    <Container display="flex" flexDirection="column" gap="20vh" backgroundColor="white" height="fit-content" width="75vw" padding="20vh 0">
      <ItemBox reverse={false} img={ImageItem1} title="Persianas" msg="Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais." />
      <ItemBox reverse={true} img={ImageItem2} title="Cortinas" msg="Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais." />
      <ItemBox reverse={false} img={ImageItem3} title="Rede de Proteção" msg="Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais." />
      <ItemBox reverse={true} img={ImageItem4} title="Películas" msg="Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais." />
      <Contact margin="0 0 7vh 0" />
    </Container>
  )
}

export default Services
