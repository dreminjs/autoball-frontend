import { InfiniteData } from '@tanstack/react-query';
import {
  IInfiteScrollResponse,
  IWheelComponentBrand,
} from '@autoball-frontend/shared-types';
import { FC } from 'react';
import { ApiOperationState } from '@/shared/types/api-operation-state.interface';
import { useChooseDiscBrandId } from '@/modules/products/model/hooks/disc/use-choose-disc-brand-id';
import { List } from '@/components/list-items/list';
import { ListItem } from '../../list-item';

interface IProps {
  data?: InfiniteData<IInfiteScrollResponse<IWheelComponentBrand>>;
  ref: (node?: Element | null) => void;
  states: ApiOperationState;
}

export const DiscBrandList: FC<IProps> = ({ states, data, ref }) => {
  const { onChangeDiscBrandId, discBrandId } = useChooseDiscBrandId();

  return (
    <List
      className="h-[250px]"
      isPending={states.isPending}
      isError={states.isError}
      error={states.error?.response?.data.detail}
      empty={!data?.pages}
    >
      <ListItem
        currentItem={null}
        onChoose={() => onChangeDiscBrandId(null)}
        isSelected={discBrandId === null}
      />
      {data?.pages.map((page, pageIndex) =>
        page.items.map((item) => (
          <ListItem
            isSelected={discBrandId !== null ? discBrandId === item.id : false}
            currentItem={item}
            onChoose={onChangeDiscBrandId}
            key={`${pageIndex}-${item.id}`}
            {...item}
          />
        ))
      )}
      <li ref={ref} />
    </List>
  );
};
