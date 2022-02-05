import {useState} from "react"
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Html from "components/Html"
import Layout from "components/Layout"

import loadMD from "lib/loadMD"


export default function Home({ main }) {
  return (
    <Layout title={ main.title } name="/projects">
      <main className={styles.main}>
        <Html html={main.html} />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const main = await loadMD("content/projects/main")
  
  return {
    props: {
      main
    }
  }

}

