import { useInView } from 'react-intersection-observer';
import { useChooseBrand } from '../../model/hooks/use-choose-brand';
import { useWheelComponentsBrands } from '../../model/hooks/use-wheel-components-brand';
import { Toolbar } from './toolbar';
import { List } from './list';
import { PostBrandModal } from './post-modal';
import { DeleteBrandModal } from './delete-modal';
import { EditBrandModal } from './edit-modal';

export const WheelComponentsPage = () => {
  const { ref, inView } = useInView();

  const { choosedBrand, onChooseBrand, onCancel } = useChooseBrand();

  const { onChangeSearchValue, search, states, data } =
    useWheelComponentsBrands(inView);

  return (
    <>
      <div>
        <Toolbar onChangeSearchValue={onChangeSearchValue} search={search} />
        <List
          onChoose={onChooseBrand}
          libRef={ref}
          states={{ ...states, error: states.error || null }}
          data={data?.pages}
        />
      </div>
      <PostBrandModal />
      <DeleteBrandModal isOpen={choosedBrand?.type === "delete"} onClose={onCancel} brand={{...choosedBrand}} />
      <EditBrandModal isOpen={choosedBrand?.type === "edit"} onClose={onCancel} brand={{...choosedBrand}}  />
    </>
  );
};
