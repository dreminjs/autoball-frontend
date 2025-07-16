import { useEffect, useRef } from 'react';
import Head from 'next/head';
import 'photoswipe/style.css';
import { YandexMap } from "./yandex-map"
import { Gallery } from './gallery';

export const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Head>
        <title>Фотогалерея | АвтоБол Групп</title>
        <meta
          name="description"
          content="Галерея фотографий автозапчастей и услуг АвтоБол"
        />
      </Head>
      <section className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-900">
          О нас{' '}
        </h1>
        <Gallery />
        <YandexMap/>
      </section>
    </div>
  );
};
