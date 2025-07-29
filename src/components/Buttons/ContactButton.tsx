import { Flex, Image, Link } from '@chakra-ui/react'

import shareIcon from "../../assets/share-04-svgrepo-com.svg"

function ContactButton(props: any) {
  return (
    <Flex justifyContent="space-evenly" p="1em" bg={props.bg} borderRadius="0.5em" onClick={(e) => {
      e.stopPropagation()
      props.OnClick()
    }} cursor="pointer">
      <Image width="10%" src={props.img} />
      <Link fontSize="1rem" fontFamily='Public Sans' 
      fontStyle="normal" fontWeight="bold" letterSpacing="0.2em" 
      color="#ffffff" textDecoration="none" textTransform="uppercase">
        {props.text}
      </Link>
      <Image width="10%" src={shareIcon} />
    </Flex>
  )
}

export default ContactButton
