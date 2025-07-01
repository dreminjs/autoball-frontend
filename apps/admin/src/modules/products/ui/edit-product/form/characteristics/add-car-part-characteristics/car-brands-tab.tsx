import TabPanel from '@mui/lab/TabPanel';
import { FC, Fragment } from 'react';
import { InputSearch } from '../../../../../../../components/input-search';
import { useCarBrands } from '../../../../../../car-brands/model/hooks';
import { List } from '../../../../../../../components';
import { useChooseCarBrand } from '../../../../../model/hooks/post-products/car/use-choose-car-brand';
import { ListItem } from '../../../list-item';

interface IProps {
  currentTab: '1' | '2' | '3';
}

export const CarBrandsTab: FC<IProps> = ({ currentTab }) => {
  const { search, states, onChangeSearchValue, data } = useCarBrands();

  const { onChooseBrand, brand } = useChooseCarBrand();

  return (
    <TabPanel value={currentTab}>
      <InputSearch search={search} onChange={onChangeSearchValue} />
      <List className='h-[400px]' {...states} empty={!data?.pages.length}>
        <ListItem
          currentItem={null}
          isSelected={brand === null}
          onChoose={(data) => onChooseBrand(null)}
        />
        {data?.pages.map((el, idx) => (
          <Fragment key={el.items[idx]?.id}>
            {el?.items.map((item) => (
              <ListItem
                currentItem={item}
                isSelected={brand !== null ? brand.id === item.id : false}
                key={item.id}
                {...item}
                onChoose={(data) => onChooseBrand(data)}
              />
            ))}
          </Fragment>
        ))}
      </List>
    </TabPanel>
  );
};
