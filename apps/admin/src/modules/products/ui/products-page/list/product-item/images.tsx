import { FC, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import PhotoSwipeLightbox from 'photoswipe/lightbox';

import 'photoswipe/style.css';

interface IProps {
  content: string[];
}
export const Images: FC<IProps> = ({ content }) => {

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
    <div className="w-[120px] h-[120px]">
      <Swiper id="gallery" spaceBetween={8} slidesPerView={1}>
        {content.map((el, idx) => (
          <SwiperSlide key={idx}>
            <div className=" bg-gray-100 flex items-center justify-center">
              {el ? (
                <a
                  target="_blank"
                  data-pswp-width={420}
                  data-pswp-height={220}
                  rel="noreferrer"
                  href={`http://localhost:9000/avtobol/${el}`}
                >
                  <img
                    src={`http://localhost:9000/avtobol/${el}`}
                    alt="Картинка товара"
                    className="object-contain w-[120px] h-[120px]"
                  />
                </a>
              ) : (
                <span className="text-gray-400">No image</span>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
