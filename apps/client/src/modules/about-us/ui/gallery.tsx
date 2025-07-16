import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { useEffect } from 'react';
import { data } from '../model/photos-data';
import Image from 'next/image';
import 'photoswipe/style.css';

export const Gallery = () => {
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
    <div
      id="gallery"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5 pswp-gallery"
      itemScope
      itemType="http://schema.org/ImageGallery"
    >
      {data.map((image, index) => (
        <figure
          key={index}
          className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          itemProp="associatedMedia"
          itemScope
          itemType="http://schema.org/ImageObject"
        >
          <a
            href={`/${image}.jpg`}
            data-pswp-width={600}
            data-pswp-height={400}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={`/${image}.jpg`}
              alt={'Фото'}
              width={600}
              height={400}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              quality={85}
              placeholder="blur"
              blurDataURL="/placeholder.jpg"
            />
          </a>
        </figure>
      ))}
    </div>
  );
};
