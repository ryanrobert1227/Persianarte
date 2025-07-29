import { useState } from 'react'
import { Button, Flex, Popover, Portal } from '@chakra-ui/react'

import ContactButton from '../Buttons/ContactButton'

import RedirectTo from '../../utils/Redirect/Redirect'

import whatsappLogo from "../../assets/whatsapp-svgrepo-com.svg"
import instagramLogo from "../../assets/instagram-1-svgrepo-com.svg"

function PopOver() {
  const [open, setOpen] = useState(false)

  return (
          <Popover.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
            <Popover.Trigger asChild>
              <Button p="0" _hover={{color:"#5FB4A2"}} fontSize={["0.7rem", "0.9rem", "", "0.9rem"]} fontFamily='Public Sans' fontStyle="normal" 
              fontWeight="bold" textAlign="center" letterSpacing="0.1em" color={open ? "#5FB4A2" : "#33323D" }
              textTransform="uppercase">
                CONTATO
              </Button>
            </Popover.Trigger>
            <Portal>
              <Popover.Positioner>
                <Popover.Content css={{ "--popover-bg": "#ebebeb" }}>
                  <Popover.Arrow />
                  <Popover.Body>
                    <Flex flexDirection="column" justifyContent="space-between" height="20vh">
                      <ContactButton img={whatsappLogo} bg="#25D366" text="Whatsapp" OnClick={() => RedirectTo(2, "https://wa.me/5571991780134")} />
                      <ContactButton img={instagramLogo} 
                      bg="linear-gradient(to right, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)" text="Instagram" OnClick={() => RedirectTo(2, "https://www.instagram.com/persianartedecoracoes/")} />
                    </Flex>
                  </Popover.Body>
                </Popover.Content>
              </Popover.Positioner>
            </Portal>
          </Popover.Root>
  )
}

export default PopOver
