import TabPanel from '@mui/lab/TabPanel';
import { FC, Fragment } from 'react';
import { List } from '../../../../../../../components';
import { useCarSeries } from '../../../../../../car-series/model/hooks/use-car-series';
import { useChooseSeries } from '../../../../../model/hooks/post-products/car/use-choose-series';
import { ListItem } from '../../../list-item';
import { useAtomValue } from 'jotai';
import { carBrandAtom } from '../../../../../model/post-products-atoms-page';

interface IProps {
  currentTab: '1' | '2' | '3';
}

export const CarSeriesTab: FC<IProps> = ({ currentTab }) => {
  const carBrand = useAtomValue(carBrandAtom);
  const { choosedSeries, onChooseSeries } = useChooseSeries();
  const { states, data } = useCarSeries(carBrand?.id || null);

  return (
    <TabPanel value={currentTab}>
      <List className='h-[400px]' {...states} empty={!data?.pages.length}>
        <ListItem
          currentItem={null}
          onChoose={() => onChooseSeries(null)}
          isSelected={false}
        />
        {data?.pages.map((el, idx) => (
          <Fragment key={el.items[idx]?.id}>
            {el?.items.map((item) => (
              <ListItem
                currentItem={item}
                isSelected={
                  choosedSeries !== null ? choosedSeries.id === item.id : false
                }
                {...item}
                onChoose={(data) => onChooseSeries(data)}
                key={item.id}
              />
            ))}
          </Fragment>
        ))}
      </List>
    </TabPanel>
  );
};
