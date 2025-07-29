import { Container, Flex, Link, Text, Image } from '@chakra-ui/react'

import Contact from '../../components/Contact/Contact';
import ButtonsTemplate from '../../components/Buttons/ButtonsTemplate'

import RedirectTo from '../../utils/Redirect/Redirect';

import FirstIMG from "../../assets/FirstIMG.webp"

function Home() {
  return (
      <Container display="flex" flexDirection="column" gap="10vh" backgroundColor="white" height="fit-content" width={["90%", "90%", "85%", "75%"]} padding="20vh 0">
        <Flex flexDirection="column" alignItems="center" position="relative" width="100%">
          <Image src={FirstIMG} width="100%" />
          <Flex justifyContent="center" position="absolute" right="0" bottom="0" backgroundColor="rgb(230, 230, 230)" width={["12rem", "", "", "26rem"]} height={["8rem", "", "", "20rem"]} padding={["0.5rem", "", "", "1rem"]} >
            <Text textAlign="Right" fontFamily='Ibarra Real Nova' fontWeight="bold" fontSize={["1.5rem","1.5rem","1.5rem","3.4rem"]} color="#33323D">Seu Especialista de Persianas em Salvador</Text>
            <Link
              display={["none", "none", "", "flex"]}
              href="#about-us"
              position="absolute"
              right={0}
              bottom={0}
              width={{ base: "60%", md: "40%", lg: "55%" }}
              backgroundColor="#203A4C"
              alignItems="center"
              justifyContent="flex-start"
              _hover={{ textDecoration: "none", opacity: 0.9 }}
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                width="25%"
                backgroundColor="rgba(0, 0, 0, 0.1)"
                height="100%"
                minWidth="3.5rem"
                minHeight="3.5rem"
              >
                  <svg stroke="#5FB4A2" xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                    <g fill="none" fillRule="evenodd">
                      <path d="M0 9l8 4 8-4" />
                      <path opacity=".5" d="M0 5l8 4 8-4" />
                      <path opacity=".25" d="M0 1l8 4 8-4" />
                    </g>
                  </svg>
              </Flex>
              <Text
                id='about-us'
                flexGrow={1}
                pr="0.3em"
                textAlign="center"
                fontFamily="Public Sans"
                fontSize={["1rem", "", "", "0.8rem" ]}
                fontWeight="600"
                lineHeight="0.9em"
                letterSpacing="0.2px"
                color="white"
                textTransform="uppercase"
              >
                SOBRE nós
              </Text>
            </Link>
          </Flex>
        </Flex>

        <Flex justifyContent="space-between" height="fit-content" width="100%" mt={["0", "", "", "10%"]}>
          <Image src="https://malique.com.br/curitiba/wp-content/uploads/sites/3/2023/03/Persiana-Vertical-Translucido-malique.cwb_.jpeg" display={["none", "", "", "block"]} width="47%" />
          <Flex flexDirection="column" alignItems="center" width={["100%", "", "", "40%"]} gap="4vh" padding="1rem 0rem">
            <Text  width="100%" textAlign={["center", "", "", "left"]} fontFamily='Ibarra Real Nova' fontWeight="700" fontSize="2.3rem" lineHeight="42px" color="#33323D"> Sobre Nos</Text>
            <Text width={["90%","100%","100%","100%"]} textAlign="justify" fontFamily='Public Sans' fontWeight="400" fontSize="1rem" lineHeight="1.8rem" color="#33323D" opacity="0.8">Sou um desenvolvedor front-end júnior procurando por uma oportunidade. Eu foco em escrever HTML acessível, usando práticas modernas de CSS e escrevendo um JavaScript limpo. Quando estou escrevendo código JavaScript, na maioria das vezes estou usando React, mas posso me adapta para qualquer ferramenta se necessário. Moro em Londres, UK, mas também seria feliz trabalhando remotamente e tenho experiência em times remotos.</Text>
            <ButtonsTemplate msg="Ver serviços" OnClick={() => RedirectTo(1, "services")} />
          </Flex>
        </Flex>
        <Contact margin={["0", "", "", "10% 0"]} />
      </Container>
  )
}

export default Home
