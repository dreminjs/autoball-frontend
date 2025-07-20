  import { IProduct } from '@autoball-frontend/shared-types';
  import { FC } from 'react';
  import { CarSpecs } from './car-specs';
  import { DiscInfo } from './disc-info';
  import { InfoRow } from './info-row';
  import { PriceBlock } from './price-block';
  import { TireInfo } from './tire-info';
  import Link from 'next/link';
  import { Images } from './images';

  type Props = IProduct;

  export const ProductItem: FC<Props> = (props) => {
    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: `${props.car_part_name} ${props.car_brand_name} ${props.car_series_name}`,
      description: props.description || '',
      brand: {
        '@type': 'Brand',
        name: props.car_brand_name,
      },
      sku: props.OEM,
      productID: props.id,
      offers: {
        '@type': 'Offer',
        price: props.price,
        priceCurrency: 'RUB',
      },
    };

    const hasDiscInfo = props.disc_id;
    const hasTireInfo = props.tire_id;
    const showCarSpecs = props.volume;

    return (
      <li
        className="relative border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white mb-4"
        itemScope
        itemType="https://schema.org/Product"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <Images content={props.pictures} />

          <div className="flex-1">
            <Link
              href={`zapchast/${props.id}-${props.car_part_name}-${props.car_brand_name}-${props.car_series_name}`}
              className="text-xl font-semibold text-gray-800 mb-5 underline block"
            >
              {props.car_part_name} {props.car_brand_name} {props.car_series_name}
            </Link>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600 mb-4">
              <InfoRow itemProp="releaseDate" label="Год" value={props.year} />

              {showCarSpecs && <CarSpecs {...props} />}
              {hasDiscInfo && <DiscInfo {...props} />}
              {hasTireInfo && <TireInfo {...props} />}
              <InfoRow
                itemProp="serialNumber"
                label="VIN"
                value={<span className="font-mono">{props.VIN}</span>}
              />
              <InfoRow
                itemProp="sku"
                label="OEM"
                value={<span className="font-mono">{props.OEM}</span>}
              />
            </ul>

            {props.description && (
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {props.description}
              </p>
            )}

            <PriceBlock {...props} id={props.id} />
          </div>
        </div>
      </li>
    );
  };
