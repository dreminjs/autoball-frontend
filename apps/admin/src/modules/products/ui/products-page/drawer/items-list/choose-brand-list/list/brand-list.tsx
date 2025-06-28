import {
  ICarBrand,
  IInfiteScrollResponse,
} from '@autoball-frontend/shared-types';
import { FC } from 'react';
import { InfiniteData } from '@tanstack/react-query';
import { List, ListItem } from '../../../../../../../../components';
import { useChooseCarBrandId } from '../../../../../../model/hooks/use-choose-car-brand-id';

interface IProps {
  data?: InfiniteData<IInfiteScrollResponse<ICarBrand>>;
  ref: (node?: Element | null) => void;
  states: {
    error?: string;
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
  };
}

export const BrandList: FC<IProps> = ({ data, ref, states }) => {
  const { onChooseBrand, brandId } = useChooseCarBrandId();

  return (
    <List
      isPending={states.isPending}
      isError={states.isError}
      error={states.error}
      empty={!data?.pages}
    >
      <ListItem
        isSelected={brandId === null}
        currentItem={null}
        onChoose={(data) => onChooseBrand(null)}
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
