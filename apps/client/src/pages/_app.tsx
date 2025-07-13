import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Layout } from '@/components/layout';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Авторазборка avtobol.by. Б/У запчасти из Европы</title>
        <meta name="description" content="Авторазборка avtobol.by. Оригинальные б/у запчасти на многие марки авто." />
      </Head>
      <main className="app">
        <Layout >
           <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}

export default CustomApp;
