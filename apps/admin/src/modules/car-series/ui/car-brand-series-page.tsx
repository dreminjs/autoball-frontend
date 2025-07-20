import { useLocation } from 'react-router-dom';
import { Toolbar } from './toolbar';
import { PostSeriesModal } from './post-modal';
import { DeleteSeriesModal } from './delete-modal/delete-series-modal';
import { useChooseSeries } from '../model/hooks/use-choose-series';
import { EditSeriesModal } from './edit-modal/edit-series-modal';
import { CarBrandSeriresList } from './list/list';

export const CarBrandSeriesPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const brandId = searchParams.get('brandId');
  const brandName = searchParams.get('brandName');

  const { onChooseSeries, choosedSeries, onCancel } = useChooseSeries();

  return (
    <>
      <div>
        <Toolbar brandName={brandName} />
        <CarBrandSeriresList brandId={brandId} onChoose={onChooseSeries} />
      </div>
      <PostSeriesModal />
      <DeleteSeriesModal
        isOpen={choosedSeries?.type === 'delete'}
        onClose={onCancel}
        series={{ id: choosedSeries?.id, name: choosedSeries?.name }}
      />
      <EditSeriesModal
        series={{
          id: choosedSeries?.id,
          name: choosedSeries?.name,
          year: choosedSeries?.year,
        }}
        isOpen={choosedSeries?.type === 'edit'}
        onClose={onCancel}
      />
    </>
  );
};
