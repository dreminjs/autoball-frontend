import { FC, Fragment } from 'react';
import { ICarPart } from '@autoball-frontend/shared-types';
import { Actions, ApiOperationState, IInfiteScrollResponse } from '../../../../../shared';
import { CarPartItem, } from './list-item';

interface IProps {
  data?: IInfiteScrollResponse<ICarPart>[];
  onChoose: (data: ICarPart & Actions) => void;
  libRef: (node?: Element | null) => void;
  states: ApiOperationState;
}

export const List: FC<IProps> = ({ data, onChoose, libRef, states }) => {
  if (states.isPending)
    return <div className="text-center py-4">Загрузка...</div>;

  if (states.isError)
    return (
      <p className="text-center py-4 text-red-500">
        {states.error?.response?.data.detail}
      </p>
    );

  if (!data?.length)
    return (
      <div className="text-center py-4 text-gray-500">No car brands found</div>
    );

  return (
    <ul className="h-[75vh] overflow-y-scroll">
      {data?.map((el, idx) => (
        <Fragment key={el.items[idx]?.id}>
          {el?.items.map((item) => (
            <CarPartItem key={item.id} {...item} onChoose={onChoose} />
          ))}
        </Fragment>
      ))}
      <li ref={libRef} />
    </ul>
  );
};
