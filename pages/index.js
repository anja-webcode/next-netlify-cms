import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import styles from '../styles/Home.module.css'

const Home = ({ slugs }) => {
  return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {slugs.map(slug => {
          return (
              <Link key={slug} href="/blog/[slug]" as={'/blog/' + slug}>
                <a>{'blog/' + slug}</a>
              </Link>
          )
        })}
      </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts')
  return {
    props: {
      slugs: files.map(filename => filename.replace('.md', '')),
    },
  }
}

export default Home