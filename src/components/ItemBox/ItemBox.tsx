import { Flex, Image, Text } from '@chakra-ui/react'

import RedirectTo from '../../utils/Redirect/Redirect'

import ButtonsTemplate from '../Buttons/ButtonsTemplate'

function ItemBox(props:any) {
  return (
    <Flex flexDirection={["column", props.reverse ? "row-reverse" : "row", props.reverse ? "row-reverse" : "row", props.reverse ? "row-reverse" : "row"]} justifyContent="space-between">
      <Image src={props.img} width={["100%", "45%", "45%", "45%"]}  />
      <Flex flexDirection="column" width={["100%", "45%", "45%", "45%"]}>
        <Text textAlign={["center", "start", "start", "start"]} width="100%" m="4% 0" fontFamily="Ibarra Real Nova" fontStyle="normal" fontWeight="700" fontSize="2.5em" color="#33323D" >{props.title}</Text>
        <Text textAlign={["justify", "start", "start", "start"]} width="100%" mb="7%" fontFamily="Public Sans" fontStyle="normal" fontWeight="400" fontSize="1.1em" lineHeight="2em" color="#33323D" opacity="0.8">{props.msg}</Text>
        <ButtonsTemplate msg="Ver Mais" width="30%" OnClick={() => RedirectTo(2, "https://www.instagram.com/persianartedecoracoes/")}/>
      </Flex>
    </Flex>
  )
}

export default ItemBox
