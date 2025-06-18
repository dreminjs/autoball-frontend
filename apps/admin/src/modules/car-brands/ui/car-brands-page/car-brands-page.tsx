import { List } from './list';
import { Toolbar } from './toolbar';
import { DeleteBrandModal } from './delete-modal/';
import { PostBrandModal } from './post-modal';
import { EditBrandModal } from './edit-modal';
import { useCarBrands, useChooseBrand } from '../../model/hooks';
import { useInView } from 'react-intersection-observer';

export const CarBrandsPage = () => {
  const { ref, inView } = useInView();
  const { choosedBrand, onChooseBrand, onCancel } = useChooseBrand();
  const { onChangeSearchValue, search, data, states } = useCarBrands(inView);
  
  return (
    <>
      <div className="w-full sm:w-[75%] xl:w-[70%] mx-auto">
        <Toolbar onChangeSearchValue={onChangeSearchValue} search={search} />
        <List
          states={states}
          libRef={ref}
          data={data?.pages}
          onChoose={(data) => onChooseBrand(data)}
        />
      </div>
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
