import { CarBrandList } from './list/car-brand-list';
import { useCarBrands } from '../model/hooks/use-car-brands';
import { useChooseBrand } from '../model/hooks/use-choose-brand';
import { CarBrandsToolbar } from './car-brands-toolbar';
import { PostBrandModal } from './post-brand-modal/';
import { useState } from 'react';
import { DeleteBrandModal } from './delete-brand-modal/delete-brand-modal';

export const CarBrandsPage = () => {
  const { choosedBrand, onChooseBrand } = useChooseBrand();

  const { onChangeSearchValue, search, data } = useCarBrands();

  const [isPostBrandVisible, setIsPostBrandVisible] = useState(false);

  return (
    <>
      <>
        <CarBrandsToolbar
          onAddBrand={() => setIsPostBrandVisible(true)}
          onChangeSearchValue={onChangeSearchValue}
          search={search}
        />
        <CarBrandList
          items={[
            { id: '1231', picture: 'asdda.jpg', name: 'dddd' },
            { id: '1231', picture: 'asdda.jpg', name: 'dddd' },
            { id: '1231', picture: 'asdda.jpg', name: 'dddd' },
          ]}
          onChoose={(data) => onChooseBrand(data)}
        />
      </>
      <PostBrandModal
        isOpen={isPostBrandVisible}
        onClose={() => setIsPostBrandVisible(false)}
      />
      <DeleteBrandModal
        brand={{id: choosedBrand?.id, name: choosedBrand?.name}}
        isOpen={choosedBrand?.type === 'delete'}
        onClose={() => onChooseBrand(null)}
      />
    </>
  );
};
