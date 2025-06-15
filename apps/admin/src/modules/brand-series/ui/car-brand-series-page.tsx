import { useLocation } from 'react-router-dom';
import { List } from './list/list';
import { Toolbar } from './toolbar';
import { PostSeriesForm } from './modal/form/post-series-form';
import { useState } from 'react';

export const CarBrandSeriesPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const brandId = searchParams.get('brandId');
  const brandName = searchParams.get('brandName');

  const [isPostSeriesOpen,setIsPostSeriesOpen] = useState(false)

  return (
    <>
    <div>
      <Toolbar brandName={brandName} onOpenPostSeriesModal={() => setIsPostSeriesOpen(true)} />
      <List brandId={brandId} />
    </div>
    <PostSeriesForm isOpen={isPostSeriesOpen} />
    </>
  );
};
