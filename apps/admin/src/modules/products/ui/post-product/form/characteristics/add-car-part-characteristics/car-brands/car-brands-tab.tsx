import TabPanel from '@mui/lab/TabPanel';
import { FC, Fragment } from 'react';
import { InputSearch } from '../../../../../../../../components/input-search';
import { useCarBrands } from '../../../../../../../car-brands/model/hooks';
import { List, ListItem } from '../../../../../../../../components';

interface IProps {
  currentTab: '1' | '2' | '3';
}

export const CarBrandsTab: FC<IProps> = ({ currentTab }) => {
  const { search, states, onChangeSearchValue, data } = useCarBrands();

  return (
    <TabPanel value={currentTab}>
      <InputSearch search={search} onChange={onChangeSearchValue} />
      <List {...states} empty={!data?.pages.length}>
        {data?.pages.map((el, idx) => (
          <Fragment key={el.items[idx]?.id}>
            {el?.items.map((item) => (
              <ListItem
                currentItem={null}
                isSelected={false}
                key={item.id}
                {...item}
                onChoose={(data) => console.log(data)}
              />
            ))}
          </Fragment>
        ))}
      </List>
    </TabPanel>
  );
};
