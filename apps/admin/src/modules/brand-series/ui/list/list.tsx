import { FC } from 'react';
import { useGetCarSeriesByBrandId } from '../../api/queries';
import { ListItem } from './list-item';
import { ICarSeries } from '@autoball-frontend/shared-types';

interface IProps {
  brandId: string | null;
  onChoose:  (newValue: (ICarSeries & {
    type: "delete" | "edit";
}) | null) => void
}

export const List: FC<IProps> = ({ brandId, onChoose }) => {
  const { data, isError, isPending, error } = useGetCarSeriesByBrandId(brandId);

  if (isPending) return <div className="text-center py-4">Loading...</div>;
  if (isError)
    return (
      <div className="text-center py-4 text-red-500">
        {error?.response?.data.detail}
      </div>
    );
  if (!data?.length)
    return (
      <div className="text-center py-4 text-gray-500">No car series found</div>
    );

  return (
    <ul className="divide-y divide-gray-200 overflow-y-scroll h-[75vh]">
      {data.map((series) => (
        <ListItem onChoose={onChoose} key={series.id} {...series} />
      ))}
    </ul>
  );

};
