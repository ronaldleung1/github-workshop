import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Intro to Git & GitHub Workshop</title>
        <meta name="description" content="Website featuring contributions from Intro to Git & GitHub Workshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">

        <h1 className="text-5xl font-bold">
          Intro to Git & GitHub
        </h1>

        <p className="my-4">
          Add yourself to this website by submitting a pull request on {' '}
          <a href="https://github.com/googol88/github-workshop" className="text-blue-600 hover:underline" target="_blank">googol88/github-workshop</a>!
        </p>

        <div className="flex flex-wrap justify-center max-w-4xl">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
