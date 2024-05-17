import { Box, HStack, Heading, Text } from "@chakra-ui/react"
import { Link, Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

function Nav() {
  return (
    <Box w="100%" h="50px" bg="blue.500" pl={2}>
      <Link to="/">
        <Heading textColor="white">GatorMed</Heading>
      </Link>
    </Box>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box w="100%" h="50px" bg="blue.500" pl={2}>
      <HStack>
        <Heading textColor="white">GatorMed</Heading>
        <Text textColor="white">&copy; {currentYear} Ethan Hanlon</Text>
      </HStack>
    </Box>
  )
}
