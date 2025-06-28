import { Toolbar } from './toolbar';
import { PostBrandModal } from './post-modal';
import { DeleteCarPartModal } from './delete-modal';
import { EditCarPartModal } from './edit-modal';
import { useChooseCarPart } from '../../model/hooks/use-choose-car-part';
import { useCarParts } from '../../model/hooks/use-car-parts';
import { CarPartList } from './list';

export const CarPartsPage = () => {

  const { choosedCarPart, onChooseCarPart, onCancel } = useChooseCarPart();

  const { onChangeSearchValue, search, states, data, inViewRef } =
    useCarParts();

  return (
    <>
      <div>
        <Toolbar onChangeSearchValue={onChangeSearchValue} search={search} />
        <CarPartList
          onChoose={onChooseCarPart}
          libRef={inViewRef}
          states={{ ...states, error: states.error || null }}
          data={data?.pages}
        />
      </div>
      <PostBrandModal />
      <DeleteCarPartModal isOpen={choosedCarPart?.type === "delete"} onClose={onCancel} brand={{...choosedCarPart}} />
      <EditCarPartModal isOpen={choosedCarPart?.type === "edit"} onClose={onCancel} brand={{...choosedCarPart}}  />
    </>
  );
};
