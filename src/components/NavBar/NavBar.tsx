import { useEffect, useState } from 'react'
import { Flex, Image } from '@chakra-ui/react'

import NavLink from '../text/NavLink'

import logoMini from "../../assets/logoMini.webp"
import PopOver from './PopOver'


function NavBar() {
  const [isActive, setIsActive] = useState<Boolean>(true)

  useEffect(() => {
    window.location.pathname == "/" ? setIsActive(true) : setIsActive(false)
  }, [window.location.pathname])

  return (
      <Flex justifyContent="space-between" p={["0 3rem 0 1rem","","","0 7rem"]} boxShadow="0 -5px 2em black" alignItems="center" position="fixed" zIndex={1} width="100%" height="15vh" backgroundColor="white">
        <Image src={logoMini} alt='Logo' height={["40%", "", "", "60%"]} />
        <Flex gap={["0.8rem", "", "", "2rem"]} alignItems="center" width="fit-content">
            <NavLink link="/" color="#33323D" msg="Início" isActive={isActive} />
            <NavLink link="/services" color="#33323D" msg="Serviços" isActive={!isActive} />
            <PopOver />
        </Flex>
      </Flex>
  )
}

export default NavBar
