import { FC } from 'react';
import { useGetCarSeriesByBrandId } from '../../api/queries';
import { ListItem } from './list-item';

interface IProps {
  brandId: string | null;
}

export const List: FC<IProps> = ({ brandId }) => {
 //  const { data, isError, isPending, error } = useGetCarSeriesByBrandId(brandId);

  // if (isPending) return <div className="text-center py-4">Loading...</div>;
  // if (isError)
  //   return (
  //     <div className="text-center py-4 text-red-500">
  //       {error?.response?.data.detail}
  //     </div>
  //   );
  // if (!data?.length)
  //   return (
  //     <div className="text-center py-4 text-gray-500">No car series found</div>
  //   );

  // return (
  //   <ul className="divide-y divide-gray-200">
  //     {data.map((series) => (
  //       <ListItem key={series.id} {...series} />
  //     ))}
  //   </ul>
  // );

  return <div>
    123
  </div>
};
