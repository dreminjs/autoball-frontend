import { IProduct } from '@autoball-frontend/shared-types';
import { FC } from 'react';
import { Gallery } from './gallery';
import { ProductMicroData } from './product-microdata';
import { Info } from './info';
import { ProductSpecs } from './product-specs';
import { ProductDescription } from './description';

type Props = IProduct;

export const ProductPage: FC<Props> = (props) => {
  return (
    <>
      <ProductMicroData {...props} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8 mt-6">
          <div className="md:w-1/2">
            <Gallery content={props.pictures} />
          </div>

          <div className="md:w-1/2">
            <Info {...props} />

            <div className="mt-8 space-y-8">
              <ProductSpecs {...props} />
              {props.description && (
                <ProductDescription description={props.description} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
