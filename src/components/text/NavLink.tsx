import { Link } from '@chakra-ui/react'

interface NavLinkProps {
  msg: string;
  color: string;
  link?: string;
  isActive?: Boolean;
}

function NavLink(props: NavLinkProps) {

  return (
      <Link href={props.link} fontSize={["0.7rem", "0.9rem", "", "0.9rem"]} fontFamily='Public Sans' 
      fontStyle="normal" fontWeight="bold" textAlign="center" letterSpacing="0.1rem" color={props.isActive ? "#5FB4A2" : props.color} 
      textTransform="uppercase" >{props.msg}</Link> 
  )
}

export default NavLink
