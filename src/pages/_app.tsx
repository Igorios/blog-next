import '../ui/styles/globals.css';
import type { AppProps } from 'next/app';
import styles from '../ui/styles/Home.module.css';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Link href='/'>
        <header>
          <h1 className={styles.title}>HEADER</h1>
        </header>
      </Link>
      <Component {...pageProps} />
      <h1>FOOTER</h1>
    </>
  )
}
