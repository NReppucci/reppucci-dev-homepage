import { Box, Flex, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex
      as="footer"
      justify="space-between"
      align="center"
      opacity={0.4}
      fontSize="sm"
      px={4}
      py={2}
    >
      <Box>
        &copy; {new Date().getFullYear()} Nate Reppucci. All Rights Reserved.
      </Box>
      <Box textAlign="right">
        Based on site by{' '}
        <Link href="https://www.craftz.dog/" isExternal color="blue.500">
          Takuya Matsuyama
        </Link>
        .
      </Box>
    </Flex>
  )
}

export default Footer
