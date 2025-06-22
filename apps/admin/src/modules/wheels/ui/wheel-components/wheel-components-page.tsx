import { useInView } from 'react-intersection-observer';
import { useChoosedWheelComponentBrand  } from '../../model/hooks/use-choose-wheel-component-brand';
import { useWheelComponentsBrands } from '../../model/hooks/use-wheel-components-brand';
import { Toolbar } from './toolbar';
import { List } from './list';
import { PostBrandModal } from './post-modal';
import { DeleteBrandModal } from './delete-modal';
import { EditBrandModal } from './edit-modal';

export const WheelComponentsPage = () => {
  const { ref, inView } = useInView();

  const { choosedWheelComponentBrand, onChooseWheelComponentBrand, onCancel } = useChoosedWheelComponentBrand();

  const { onChangeSearchValue, search, states, data } =
    useWheelComponentsBrands(inView);

  return (
    <>
      <div>
        <Toolbar onChangeSearchValue={onChangeSearchValue} search={search} />
        <List
          onChoose={onChooseWheelComponentBrand}
          libRef={ref}
          states={{ ...states, error: states.error || null }}
          data={data?.pages}
        />
      </div>
      <PostBrandModal />
      <DeleteBrandModal isOpen={choosedWheelComponentBrand?.type === "delete"} onClose={onCancel} brand={{...choosedWheelComponentBrand}} />
      <EditBrandModal isOpen={choosedWheelComponentBrand?.type === "edit"} onClose={onCancel} brand={{...choosedWheelComponentBrand}}  />
    </>
  );
};
