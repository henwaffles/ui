import { Flex, Heading, IconButton, Spacer, VStack } from "@chakra-ui/react";
import {FaSun, FaMoon, FaInstagram, FaGithub} from 'react-icons/fa'
import { useColorMode } from "@chakra-ui/color-mode";
import { useNavigate, Link } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./components/Profile"
import Social from "./components/Social"

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
 
    

  return (
    <VStack p={5}>
      <Flex w="100%">
          <Heading
          ml="8" size="md" fontWeight='semibold' color="#f7971e">HenWaffles</Heading>
      
      <Spacer></Spacer>
      <IconButton ml={2} icon={<FaInstagram /> } isRound='true' onClick={()=> window.open("https://instagram.com/henwaffles")} ></IconButton>
      <IconButton ml={2} icon={<FaGithub /> } isRound='true' onClick={()=> window.open("https://github.com/henwaffles")} ></IconButton>
      <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
