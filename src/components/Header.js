import { Stack, useColorMode, useMediaQuery, Circle, Flex, Box, Text, Button, Image } from '@chakra-ui/react'
import React from 'react'

function Header() {

  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  
  return (
    <Stack>
      <Flex direction={isNotSmallerScreen ? "row" : "column"} 
      spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">

      <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
        <Text fontSize="5xl" fontWeight="semibold">Merhaba, ben</Text>
        <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to right, #f7971e, #ffd200)" bgClip="text">HenWaffles</Text>
        <Text color={isDark ? "gray.200" : "black.500"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
        <Button mt={8} backgroundColor="#f7971e" color="black" onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}>Click</Button>

      </Box>
      <Image alignSelf="flex-start" mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"} borderRadius='50%' 
          backgroundColor="transparent" boxShadow="ld"
          boxSize="300px" src='https://avatarfiles.alphacoders.com/218/218712.jpg' />
        

      </Flex>
      
    </Stack>
    
  )
}

export default Header