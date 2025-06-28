import {
  ICarPart,
  IInfiteScrollResponse,
} from '@autoball-frontend/shared-types';
import { InfiniteData } from '@tanstack/react-query';
import { FC } from 'react';
import { List, ListItem } from '../../../../../../../../components';
import { useChooseCarPartId } from '../../../../../../model/hooks/use-choose-car-part-id';

interface IProps {
  data?: InfiniteData<IInfiteScrollResponse<ICarPart>>;
  ref: (node?: Element | null) => void;
  states: {
    error?: string;
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
  };
}

export const CarPartList: FC<IProps> = ({ states, data, ref }) => {
  const { choosedCarPartId, onChooseCarPartId } = useChooseCarPartId();

  return (
    <List
      isPending={states.isPending}
      isError={states.isError}
      error={states.error}
      empty={!data?.pages}
    >
      <ListItem
        isSelected={choosedCarPartId === null}
        currentItem={null}
        onChoose={(data) => onChooseCarPartId(null)}
      />
      {data?.pages.map((page, pageIndex) =>
        page.items.map((item) => (
          <ListItem
            isSelected={choosedCarPartId !== null ? choosedCarPartId === item.id : false}
            currentItem={item}
            onChoose={onChooseCarPartId}
            key={`${pageIndex}-${item.id}`}
            {...item}
          />
        ))
      )}
      <li ref={ref} />
    </List>
  );
};
