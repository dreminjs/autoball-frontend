import { useLocation } from 'react-router-dom';
import { List } from './list/list';
import { Toolbar } from './toolbar';
import { PostSeriesModal } from './post-series-modal/post-series-modal';
import { useSeriesModal } from '../model/hooks/use-series-modal';

export const CarBrandSeriesPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const brandId = searchParams.get('brandId');
  const brandName = searchParams.get('brandName');

  const { isOpen, onToggleVisibility } = useSeriesModal();

  return (
    <>
      <div>
        <Toolbar
          brandName={brandName}
          onOpenPostSeriesModal={onToggleVisibility}
        />
        <List brandId={brandId} />
      </div>
      <PostSeriesModal isOpen={isOpen} onClose={onToggleVisibility} />
    </>
  );
};
