import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import Image from 'next/image';
import { FC, useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

interface IProps {
  content: string[];
}

export const Gallery: FC<IProps> = ({ content }) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    }) as PhotoSwipeLightbox | null;

    lightbox?.init();

    return () => {
      lightbox?.destroy();
      lightbox = null;
    };
  }, []);
  return (
    <Swiper id="gallery" spaceBetween={8} slidesPerView={1}>
      {content?.map((el, idx) => (
        <SwiperSlide key={idx}>
          <div className=" bg-gray-100 flex items-center justify-center">
            <a
              target="_blank"
              data-pswp-width={420}
              data-pswp-height={220}
              rel="noreferrer"
              href={`http://localhost:9000/avtobol/${el}`}
            >
              <Image
                priority
                height={200}
                width={200}
                src={`http://localhost:9000/avtobol/${el}`}
                alt="Картинка товара"
                className="object-cover h-[200px]"
              />
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
