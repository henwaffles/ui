import React from 'react'
import { Flex, useMediaQuery, Box, Heading, Text, Icon } from  '@chakra-ui/react'
import { DiCodeigniter, DiPhotoshop, DiHtml5, DiJavascript1 } from 'react-icons/di'

function Profile() {


  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


  return (
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%" maxWidth={{base: "100vh", md: "100vh", lg: "130vh", xl:"130vh"}}>
      <Box alignSelf="left" px="16" py="4">
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex rounded="xl" direction="column" mt={4} bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "#f7971e", }}>
                        <Icon color="black" p="4" as={DiPhotoshop} w="32" h="32"  />
                        <Text color="black" p="4" fontSize="2xl" fontWeight="semibold">
                            Logo Tasarımı
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "#f7971e", }}>
                        <Icon color="black" p="4" as={DiJavascript1} w="32" h="32" />
                        <Text color="black" p="4" fontSize="2xl" fontWeight="semibold">
                            Javascript
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "#f7971e", }}

                    >
                        <Icon as={DiHtml5} p="4" w="32" h="32" color="black" />
                        <Text color="black" p="4" fontSize="2xl" fontWeight="semibold">
                            Web Tasarım
                        </Text>
                    </Flex>
                </Flex>

      </Box>
    </Flex>
  )
}

export default Profile