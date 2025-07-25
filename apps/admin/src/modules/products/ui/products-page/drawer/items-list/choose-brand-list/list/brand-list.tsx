import {
  ICarBrand,
  IInfiteScrollResponse,
} from '@autoball-frontend/shared-types';
import { FC } from 'react';
import { InfiniteData } from '@tanstack/react-query';
import { List, ListItem } from '../../../../../../../../components';
import { ApiOperationState } from '../../../../../../../../shared';
import { useChooseCarBrandId } from '../../../../../../model/hooks/products/car/use-choose-car-brand-id';
import { useChooseSeriesId } from '../../../../../../model/hooks/products/car/use-choose-series-id';

interface IProps {
  data?: InfiniteData<IInfiteScrollResponse<ICarBrand>>;
  ref: (node?: Element | null) => void;
  states: ApiOperationState
}

export const BrandList: FC<IProps> = ({ data, ref, states }) => {
  const { onChooseBrand, brandId } = useChooseCarBrandId();
  const { onCancel } = useChooseSeriesId()

  return (
    <List
      className='h-[250px]'
      isPending={states.isPending}
      isError={states.isError}
      error={states.error?.response?.data.detail}
      empty={!data?.pages}
    >
      <ListItem
        isSelected={brandId === null}
        currentItem={null}
        onChoose={(data) => {
          onChooseBrand(null)
          onCancel()
        }}
      />
      {data?.pages.map((page, pageIndex) =>
        page.items.map((item) => (
          <ListItem
            isSelected={brandId !== null ? brandId === item.id : false}
            currentItem={item}
            onChoose={onChooseBrand}
            key={`${pageIndex}-${item.id}`}
            {...item}
          />
        ))
      )}
      <li ref={ref} />
    </List>
  );
};
