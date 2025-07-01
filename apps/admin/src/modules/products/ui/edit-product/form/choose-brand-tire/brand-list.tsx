import { FC } from 'react';
import { List } from '../../../../../../components';
import { ListItem } from '../../list-item';
import {
  IInfiteScrollResponse,
  IWheelComponentBrand,
} from '@autoball-frontend/shared-types';
import { InfiniteData } from '@tanstack/react-query';
import { ApiOperationState } from '../../../../../../shared';
import { useChooseTireBrand } from '../../../../model/hooks/post-products/tire/use-choose-tire';

interface IProps {
  data?: InfiniteData<IInfiteScrollResponse<IWheelComponentBrand>>;
  ref: (node?: Element | null) => void;
  states: ApiOperationState;
}

export const BrandList: FC<IProps> = ({ states, data, ref }) => {
  const { choosedTireBrand, onCancel, onChooseTireBrand } =
    useChooseTireBrand();

  return (
    <List
      className="h-[250px]"
      isPending={states.isPending}
      isError={states.isError}
      error={states.error?.response?.data.detail}
      empty={!data?.pages}
    >
      <ListItem
        isSelected={choosedTireBrand === null}
        currentItem={null}
        onChoose={(data) => {
          onCancel();
        }}
      />
      {data?.pages.map((page, pageIndex) =>
        page.items.map((item) => (
          <ListItem
            isSelected={
              choosedTireBrand !== null
                ? choosedTireBrand.id === item.id
                : false
            }
            currentItem={item}
            onChoose={onChooseTireBrand}
            key={`${pageIndex}-${item.id}`}
            {...item}
          />
        ))
      )}
      <li ref={ref} />
    </List>
  );
};
