import { Container, Divider, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      {}

      <Section delay={0.2}>
        <Divider my={6} />
      </Section>
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
