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
      <ItemBox reverse={false} img={ImageItem1} title="Persianas" msg="
      Conheça a linha completa de persianas que a Persianarte oferece para o seu ambiente. Trabalhamos com diversos modelos, materiais e cores, garantindo qualidade design e funcionalidade ideais para a sua necessidade.
Nossos serviços incluem instalação profissional e descomplicada, além de manutenção para garantir a longevidade do produto. Oferecemos também limpeza especializada, cuidando de suas persianas com a atenção que elas merecem. Conte com a Persianarte para beleza, conforto e praticidade." />

      <ItemBox reverse={true} img={ImageItem2} title="Cortinas" msg="
      Transforme seus ambientes com a elegância e funcionalidade das cortinas da Persianarte. Oferecemos uma vasta seleção de modelos, tecidos e cores, com consultoria especializada para o design perfeito que se adapta ao seu estilo.
Nossos serviços incluem a instalação profissional e descomplicada, assegurando um caimento impecável e de alta qualidade. Além disso, garantimos a longevidade do seu investimento com manutenção preventiva e corretiva. Conte também com nossa limpeza especializada, que revitaliza suas cortinas, removendo poeira, contribuindo para um ambiente mais saudável e agradável." />

      <ItemBox reverse={false} img={ImageItem3} title="Rede de Proteção" msg="
      A segurança da sua família e de seus pets é prioridade máxima. Na Persianarte, oferecemos soluções de redes de proteção de alta qualidade, indispensáveis para garantir a tranquilidade em seu lar, especialmente se você possui crianças ou animais de estimação.
Nossas redes são projetadas para prevenir acidentes graves, como quedas de janelas, varandas e sacadas, protegendo seus filhos e evitando fugas ou acidentes de altura com gatos e outros pets curiosos. Utilizamos materiais resistentes e certificados, que se integram discretamente ao ambiente, sem comprometer a estética." />
      
      <ItemBox reverse={true} img={ImageItem4} title="Películas" msg="
      Na Persianarte, elevamos o conforto e a funcionalidade de seus ambientes com nossa linha de películas para vidros, ideais para quem busca soluções inteligentes. Dentre nossas opções, destacamos as películas blackout, perfeitas para garantir o máximo controle.
As películas blackout são a escolha ideal para bloquear completamente a entrada de luz externa, criando ambientes totalmente escuros. São perfeitas para quartos (garantindo um sono profundo), salas de home theater (para uma experiência imersiva) ou escritórios que exigem total privacidade.
Além de escurecer, elas oferecem benefícios adicionais como a significativa redução do calor e a proteção contra os raios UV, preservando seus móveis e a sua saúde. Nossa instalação é profissional e discreta, assegurando um acabamento impecável. Invista em conforto, eficiência energética e privacidade com as películas da Persianarte!" />
      <Contact margin="0 0 7vh 0" />
    </Container>
  )
}

export default Services
