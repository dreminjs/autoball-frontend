import { IProduct } from '@autoball-frontend/shared-types';
import { useRouter } from 'next/router';

type Props = IProduct;

export const ProductMicroData = (props: Props) => {
  const router = useRouter();

  const microdata = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: `${props.car_brand_name} ${props.car_series_name} ${props.car_part_name}`,
    image: props.pictures,
    description: props.description,
    sku: props.article,
    mpn: props.OEM,
    brand: {
      '@type': 'Brand',
      name: props.car_brand_name,
    },
    offers: {
      '@type': 'Offer',
      url: `https://ваш-сайт.ru${router.asPath}`,
      priceCurrency: props.currency,
      price: props.price,
      itemCondition:
        props.condition === 'new'
          ? 'https://schema.org/NewCondition'
          : 'https://schema.org/UsedCondition',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(microdata) }}
    />
  );
};
