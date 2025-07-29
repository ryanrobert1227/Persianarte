import { Flex, Text } from '@chakra-ui/react'

import ButtonsTemplate from '../Buttons/ButtonsTemplate'
import RedirectTo from '../../utils/Redirect/Redirect';

function Contact(props: any) {
  return (
        <Flex flexDirection={["column", "column", "row", "row"]} justifyContent="space-between" alignItems="center" height="20vh" width="100%" m={props.margin} >
          <Text maxWidth={["100%", "70%", "", "43%"]} textAlign={["center", "", "", "left"]} fontFamily='Ibarra Real Nova' fontWeight="700" fontSize="2.5rem" lineHeight={["2.5rem", "", "", "3rem"]} color="#33323D">Interessado em fazer projetos comigo?</Text>
          <ButtonsTemplate msg="Contato" width={["80%", "", "", "15%"]} height="30%" OnClick={() => RedirectTo(2, "https://wa.me/5571991780134")} />
        </Flex>
  )
}

export default Contact
