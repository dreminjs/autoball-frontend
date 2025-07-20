import { FC } from 'react';
import { CarSeriesListItem } from './list-item';
import { ICarSeries } from '@autoball-frontend/shared-types';
import { List } from '../../../../components';
import { Actions } from '../../../../shared';
import { useCarSeries } from '../../model/hooks/use-car-series';

interface IProps {
  brandId: string | null;
  onChoose: (newValue: (ICarSeries & Actions) | null) => void;
}

export const CarBrandSeriresList: FC<IProps> = ({ brandId, onChoose }) => {
  
  const {
    states: { isError, isPending, error },
    data,
    inViewRef
  } = useCarSeries(brandId);

  return (
    <List
      {...{ isError, isPending }}
      empty={!data?.pages.length}
      error={error}
    >
      {data &&
        data.pages.map((page) =>
          page.items.map((item) => (
            <CarSeriesListItem onChoose={onChoose} key={item.id} {...item} />
          ))
        )}
        <li ref={inViewRef}/>
    </List>
  );
};
