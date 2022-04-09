import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import QuestionView from '../components/QuestionView';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="일문일답" />
        <meta property="og:image" content="" />
        <meta property="og:description" content="일문일답을 해보세요." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <QuestionView />
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
