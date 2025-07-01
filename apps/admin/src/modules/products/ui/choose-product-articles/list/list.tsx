import { FC } from 'react';
import { List } from '../../../../../components';
import {
  IInfiteScrollResponse,
  IProduct,
} from '@autoball-frontend/shared-types';
import { ListItem } from './list-item';
import { InfiniteData } from '@tanstack/react-query';
import { ApiOperationState } from '../../../../../shared';

interface IProps {
  data?: InfiniteData<IInfiteScrollResponse<IProduct>>;
  states: ApiOperationState;
  libRef: (node?: Element | null) => void;
}

export const ProductArticlesList: FC<IProps> = ({ states, data, libRef }) => {
  return (
    <List
      className="h-[420px] p-2"
      isPending={states.isPending}
      isError={states.isError}
      error={states.error?.response?.data.detail}
      empty={!data?.pages}
    >
      {data?.pages.map((page) =>
        page.items.map((item) => (
          <ListItem
            currency={item.currency}
            price={item.price}
            article={item.article}
            car_part_name={item.car_part_name}
            car_series_name={item.car_series_name}
            car_brand_name={item.car_brand_name}
            disc_brand_name={item.disc_brand_name}
            tire_brand_name={item.tire_brand_name}
          />
        ))
      )}
      <li ref={libRef} />
    </List>
  );
};
