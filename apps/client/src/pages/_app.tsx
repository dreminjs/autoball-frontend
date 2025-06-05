import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import {} from "@autoball-frontend/shared-types" 

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to !</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
