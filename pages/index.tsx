import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import invariant from 'tiny-invariant'
import { DATABASE_ID, getDatabase } from '../lib/notion'
import Terminal from '../lib/components/AnimatedTerminal';
import { Row, Col, Text, Spacer, Button } from '@nextui-org/react';
import { useMediaQuery } from 'react-responsive';
// import '../styles/Home.module.css'

export const getStaticProps: GetStaticProps = async () => {
  invariant(DATABASE_ID, 'DATABASE_ID is required')
  const db = await getDatabase(DATABASE_ID)

  return {
    props: {
      posts: db
    },
    revalidate: 1,
  }
}

const Home: NextPage = ({ posts }: any) => {
  console.log(posts)
  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 })

  return (
    <>
      <Row css={{ marginTop: '6rem' }}>
        <Col>
          <Text h2 weight={'thin'}>eLegal | code_camp</Text>
          <Text h1 color='white'>Lerne Programmieren</Text>
          <Text h3 color='white' weight={'thin'}>Lerne Programmieren. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto exercitationem magnam aspernatur molestiae</Text>
          <Spacer y={3} />
          <Button size={'xl'} color={'gradient'} animated shadow>Starten</Button>
        </Col>
        <Spacer x={5} />
        {(
          !isTabletOrMobile
            ? <Col>
              <Terminal />
            </Col>
            : null
        )}
      </Row>
      {posts.map((post: any) => (
        <Row key={post.id}>
          <Col>
            <Link href={`/${post.id}`} passHref>
              {/* <Text>{post.properties.Name.title[0].plain_text}</Text> */}
            </Link>
          </Col>
        </Row>
      ))}
    </>
  )
}

export default Home
