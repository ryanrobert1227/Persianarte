import { Flex, Image } from "@chakra-ui/react"

import NavLink from "../text/NavLink"

import RedirectTo from "../../utils/Redirect/Redirect"

import logoMini from "../../assets/logoMini.webp"
import logoInstagram from "../../assets/instagramLogo.webp"
import logoMaps from "../../assets/logoMaps.webp"

function Footer() {
  return (
      <Flex justifyContent="space-between" alignItems="center" position="absolute" bottom="0" zIndex={1} width="100%" height="10vh" padding={["0 2rem", "0 3rem", "", "0 11rem"]} backgroundColor="#33323D">
        <Flex alignItems="center" width={["fit-content", "80%", "", "60%"]} height="100%">
          <Image src={logoMini} alt='Logo' height="70%" />
          <Flex display={["none", "none", "flex", "flex"]} justifyContent="space-evenly" width={["25vw", "25vw", "80%", "25vw"]}>
            <NavLink link="/" color="white" msg="Início" />
            <NavLink link="/services" color="white" msg="Serviços" />
            <NavLink color="white" msg="Contato" />
          </Flex>
        </Flex>
        <Flex  justifyContent="space-evenly" alignItems="center" height="100%" width={["50%", "", "", "15%"]}>
          <Image src={logoInstagram} height="60%" onClick={() => RedirectTo(2, "https://www.instagram.com/persianartedecoracoes/")} cursor="pointer" />
          <Image src={logoMaps} height="45%" cursor="pointer" />
        </Flex>
      </Flex>
  )
}

export default Footer
