import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Flex, Box, Spacer

  } from '@chakra-ui/react'
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
    <div>
        <Flex>
          <Box p='4'>
            <h3>Industries Tecnologies</h3>
          </Box>
          <Spacer />
          <Box p='4'>
                <Menu>
                  <MenuButton>
                      Categories
                  </MenuButton>
                  <MenuList>
                      <MenuItem>Categories A</MenuItem>
                      <MenuItem>Categories B</MenuItem>
                      <MenuItem>Categories C</MenuItem>
                  </MenuList>
              </Menu>
          </Box>
          <Spacer />
          <Box p='4'>
            <CartWidget/>
          </Box>
        </Flex>
    </div>
  )
}

export default NavBar