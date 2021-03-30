import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

const Post = ({ slug, data, htmlString }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <div className={styles.container}>
        <div className={styles.main}>
          <div>the slug for this page is: {slug}</div>
          <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        </div>
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync('posts')
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetaData = fs
    .readFileSync(path.join('posts', slug + '.md'))
    .toString()
  const parsedMarkdown = matter(markdownWithMetaData)
  const htmlString = marked(parsedMarkdown.content)
  return {
    props: {
      slug,
      htmlString,
      data: parsedMarkdown.data,
    },
  }
}

export default Post
