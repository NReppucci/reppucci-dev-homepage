import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import Image from 'next/image'
import {
  IoLogoDiscord,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin
} from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an electrical engineer based in America!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nate Reppucci
          </Heading>
          <p>Electrical Engineer ( Maker / Designer / Artist )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/nate.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Nate is an electrical engineer based in Maine, USA with a passion for
          creative problem solving and bringing his ideas to life. He
          specializes in analog circuits and power electronics and enjoys using
          his skills to develop custom hardware. Outside of work, he enjoys
          playing the saxophone and reading. Currently, he is working as a IC
          Verification Engineer for Infineon Technologies AG.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Massachusetts, USA.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Began studying Electrical and Computer Engineering at Worcester
          Polytechnic Institute
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Interned at Generac Clean Energy
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Graduated with a Master&apos;s in Electrical and Computer Engineering
          from Worcester Polytechnic Institute
        </BioSection>
        <BioSection>
          <BioYear>Now:</BioYear>
          Working as an IC Verification Engineer at Infineon Technologies AG -
          IR HiRel
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          {' '}
          <Link href="https://hillhousetheband.com/" target="_blank">
            Playing Saxophone
          </Link>
          , Board & Video Games,{' '}
          <Link
            href="https://app.thestorygraph.com/profile/njreppucci"
            target="_blank"
          >
            Reading
          </Link>
          , 3D Printing, Graphic Design, Running
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/NReppucci" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @NReppucci
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/njreppucci/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @njreppucci
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.instagram.com/natereppucci/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @natereppucci
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.discordapp.com/users/215944156445540364"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoDiscord />}
              >
                @njreppucci
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
