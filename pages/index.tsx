import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import invariant from 'tiny-invariant'
import { DATABASE_ID, getDatabase } from '../lib/notion'
import { Text, Container } from '@nextui-org/react';
import Terminal from '../lib/components/AnimatedTerminal';

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
  return (
    <>
      <Terminal />
      <ol>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/${post.id}`} passHref>
              <a>
                {/* <Text text={post.properties.Name.title} /> */}
                {/* <Text>{post.properties.Name.title}</Text> */}
              </a>
            </Link>
          </li>
        ))}

      </ol>
    </>
  )
}

export default Home
