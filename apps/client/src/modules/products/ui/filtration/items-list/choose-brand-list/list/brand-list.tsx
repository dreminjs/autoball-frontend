import {
  ICarBrand,
  IInfiteScrollResponse,
} from '@autoball-frontend/shared-types';
import { FC } from 'react';
import { InfiniteData } from '@tanstack/react-query';
import { useChooseCarBrandId } from '@/modules/products/model/hooks/car/use-choose-car-brand-id';
import { useChooseSeriesId } from '@/modules/products/model/hooks/car/use-choose-series-id';
import { ApiOperationState } from '@/shared/types/api-operation-state.interface';
import { List } from '@/components/list-items/list';
import { ListItem } from '../../../list-item';

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
        onChoose={() => {
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
