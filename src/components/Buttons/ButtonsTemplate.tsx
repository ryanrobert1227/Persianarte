import { Button } from '@chakra-ui/react'

function ButtonsTemplate(props: any) {
  return (
    <Button border="0.15em solid black" borderRadius="0" 
    fontFamily='Public Sans' fontStyle="normal" fontWeight="400" fontSize="1rem" p="1.5rem"
    lineHeight="0.7rem" letterSpacing="2px" textTransform="uppercase" color="#33323D" onClick={props.OnClick}>{props.msg}</Button>
  )
}

export default ButtonsTemplate
