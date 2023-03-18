import { useEffect, useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
      });
  }, []);
  
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
          {members.map((member, i) => {
            return (
              <Card
                key={i}
                username={member.githubUser}
                name={member.name}
                quote={member.quote}
              />
            );
          })}
          <Card username="googol88" name="Ronald" quote="Hello world!"/>
          <Card username="googol88" name="Ronald" quote="Hello world!"/>
          <Card username="googol88" name="Ronald" quote="Hello world!"/>
          <Card username="googol88" name="Ronald" quote="Hello world!"/>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Presented at{' '}
          <span className="ml-1 mr-0.5">
            <Image src="/hillshacks.png" alt="hillsHacks VI" width={16} height={16} />
          </span>
          hillsHacks
        </a>
      </footer>
    </div>
  )
}
