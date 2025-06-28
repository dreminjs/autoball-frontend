import { FC, Fragment } from 'react';
import { ICarPart } from '@autoball-frontend/shared-types';
import {
  Actions,
  ApiOperationState,
  IInfiteScrollResponse,
} from '../../../../../shared';
import { List } from '../../../../../components/list-items/list';
import { CarPartItem } from './list-item';

interface IProps {
  data?: IInfiteScrollResponse<ICarPart>[];
  onChoose: (data: ICarPart & Actions) => void;
  libRef: (node?: Element | null) => void;
  states: ApiOperationState;
}

export const CarPartList: FC<IProps> = ({ data, onChoose, libRef, states }) => {
  return (
    <List
      {...states}
      empty={!data?.length}
      error={states.error?.response?.data.detail}
    >
      {data?.map((el, idx) => (
        <Fragment key={el.items[idx]?.id}>
          {el?.items.map((item) => (
            <CarPartItem key={item.id} {...item} onChoose={onChoose} />
          ))}
        </Fragment>
      ))}
      <li ref={libRef} />
    </List>
  );
};
