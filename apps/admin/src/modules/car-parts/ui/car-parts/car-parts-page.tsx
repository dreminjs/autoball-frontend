import { useInView } from 'react-intersection-observer';
import { Toolbar } from './toolbar';
import { List } from './list';
import { PostBrandModal } from './post-modal';
import { DeleteCarPartModal } from './delete-modal';
import { EditCarPartModal } from './edit-modal';
import { useChooseCarPart } from '../../model/hooks/use-choose-car-part';
import { useCarParts } from '../../model/hooks/use-car-parts';

export const CarPartsPage = () => {
  const { ref, inView } = useInView();

  const { choosedCarPart, onChooseCarPart, onCancel } = useChooseCarPart();

  const { onChangeSearchValue, search, states, data } =
    useCarParts(inView);

  return (
    <>
      <div>
        <Toolbar onChangeSearchValue={onChangeSearchValue} search={search} />
        <List
          onChoose={onChooseCarPart}
          libRef={ref}
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
