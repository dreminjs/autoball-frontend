import { Toolbar } from './toolbar';
import { DeleteBrandModal } from './delete-modal';
import { PostBrandModal } from './post-modal';
import { EditBrandModal } from './edit-modal';
import { useCarBrands, useChooseBrand } from '../../model/hooks';
import { CarBrandList } from "./list/"

export const CarBrandsPage = () => {
  const { choosedBrand, onChooseBrand, onCancel } = useChooseBrand();
  const { onChangeSearchValue, search, data, states, inViewRef } = useCarBrands();
  
  return (
    <>
      <>
        <Toolbar onChangeSearchValue={onChangeSearchValue} search={search} />
        <CarBrandList
          states={states}
          libRef={inViewRef}
          data={data?.pages}
          onChoose={(data) => onChooseBrand(data)}
        />
      </>
      <PostBrandModal />
      <DeleteBrandModal
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
