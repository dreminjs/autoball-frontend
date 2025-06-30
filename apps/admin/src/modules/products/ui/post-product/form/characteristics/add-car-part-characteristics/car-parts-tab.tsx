


import TabPanel from '@mui/lab/TabPanel';
import { FC, Fragment } from 'react';
import { InputSearch } from '../../../../../../../components/input-search';
import { List } from '../../../../../../../components';
import { useCarParts } from '../../../../../../car-parts/model/hooks/use-car-parts';
import { ListItem } from '../../../list-item';
import { useChooseCarPart } from '../../../../../model/hooks/post-products/car/use-choose-car-part';

interface IProps {
  currentTab: '1' | '2' | '3';
}

export const CarPartsTab: FC<IProps> = ({ currentTab }) => {
  const { search, states, onChangeSearchValue, data } = useCarParts();

  const { onChooseCarPart, choosedCarPart } = useChooseCarPart();

  return (
    <TabPanel value={currentTab}>
      <InputSearch search={search} onChange={onChangeSearchValue} />
      <List className='h-[400px]' {...states} empty={!data?.pages.length}>
        <ListItem
          currentItem={null}
          isSelected={choosedCarPart === null}
          onChoose={(data) => onChooseCarPart(null)}
        />
        {data?.pages.map((el, idx) => (
          <Fragment key={el.items[idx]?.id}>
            {el?.items.map((item) => (
              <ListItem
                currentItem={item}
                isSelected={choosedCarPart !== null ? choosedCarPart?.id === item.id : false}
                key={item.id}
                {...item}
                onChoose={(data) => onChooseCarPart(data)}
              />
            ))}
          </Fragment>
        ))}
      </List>
    </TabPanel>
  );
};
