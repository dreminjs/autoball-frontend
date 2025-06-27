import { useChoosedWheelComponentBrand  } from '../../model/hooks/use-choose-wheel-component-brand';
import { useWheelComponentsBrands } from '../../model/hooks/use-wheel-components-brand';
import { Toolbar } from './toolbar';
import { PostBrandModal } from './post-modal';
import { DeleteBrandModal } from './delete-modal';
import { EditBrandModal } from './edit-modal';
import { WheelComponentsBrandsList } from './list';

export const WheelComponentsPage = () => {

  const { choosedWheelComponentBrand, onChooseWheelComponentBrand, onCancel } = useChoosedWheelComponentBrand();

  const { onChangeSearchValue, search, states, data, inViewRef } =
    useWheelComponentsBrands();

  return (
    <>
      <div>
        <Toolbar onChangeSearchValue={onChangeSearchValue} search={search} />
        <WheelComponentsBrandsList
          onChoose={onChooseWheelComponentBrand}
          libRef={inViewRef}
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
