import { CarBrandList } from './list';
import { Toolbar } from './toolbar';
import { DeleteBrandModal } from './delete-modal/';
import { PostBrandModal } from './post-modal';
import { EditBrandModal } from './edit-modal';
import { useCarBrands, useChooseBrand } from '../../model/hooks';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const CarBrandsPage = () => {
  const { choosedBrand, onChooseBrand, onCancel } = useChooseBrand();

  const [isPostBrandVisible, setIsPostBrandVisible] = useState(false);

  const { ref, inView } = useInView();

  const { onChangeSearchValue, search, data, refetch, states } =
    useCarBrands(inView);

  return (
    <>
      <div className="w-full sm:w-[75%] xl:w-[70%] mx-auto">
        <Toolbar
          onAddBrand={() => setIsPostBrandVisible(true)}
          onChangeSearchValue={onChangeSearchValue}
          search={search}
        />
        <CarBrandList
          libRef={ref}
          data={data?.pages}
          onChoose={(data) => onChooseBrand(data)}
        />
      </div>
      <PostBrandModal
        refetch={refetch}
        onClose={() => setIsPostBrandVisible(false)}
        isOpen={isPostBrandVisible}
        isSuccess={states.isSuccess}
      />
      <DeleteBrandModal
        refetch={refetch}
        brand={{ id: choosedBrand?.id, name: choosedBrand?.name }}
        isOpen={choosedBrand?.type === 'delete'}
        onClose={onCancel}
      />
      <EditBrandModal
        isOpen={choosedBrand?.type === 'edit'}
        onClose={onCancel}
      />
    </>
  );
};
