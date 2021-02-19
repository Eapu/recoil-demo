import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GrapheneDB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to GrapheneDB!
        </h1>
        <Link href="/index-async">
            <a>async</a>
        </Link>

      </main>
    </div>
  )
}

