import { FC } from 'react';
import { List } from '../../../../../../components';
import { useChooseDiscBrand } from '../../../../model/hooks/post-products/disc/use-choose-disc';
import { ListItem } from '../../list-item';
import {
  IInfiteScrollResponse,
  IWheelComponentBrand,
} from '@autoball-frontend/shared-types';
import { InfiniteData } from '@tanstack/react-query';
import { ApiOperationState } from '../../../../../../shared';

interface IProps {
  data?: InfiniteData<IInfiteScrollResponse<IWheelComponentBrand>>;
  ref: (node?: Element | null) => void;
  states: ApiOperationState;
}

export const BrandList: FC<IProps> = ({ states, data, ref }) => {
  const { onCancel, choosedDiscBrand, onChooseDiscBrand } =
    useChooseDiscBrand();

  return (
    <List
      className="h-[250px]"
      isPending={states.isPending}
      isError={states.isError}
      error={states.error?.response?.data.detail}
      empty={!data?.pages}
    >
      <ListItem
        isSelected={choosedDiscBrand === null}
        currentItem={null}
        onChoose={(data) => {
          onCancel();
        }}
      />
      {data?.pages.map((page, pageIndex) =>
        page.items.map((item) => (
          <ListItem
            isSelected={
              choosedDiscBrand !== null
                ? choosedDiscBrand.id === item.id
                : false
            }
            currentItem={item}
            onChoose={onChooseDiscBrand}
            key={`${pageIndex}-${item.id}`}
            {...item}
          />
        ))
      )}
      <li ref={ref} />
    </List>
  );
};
