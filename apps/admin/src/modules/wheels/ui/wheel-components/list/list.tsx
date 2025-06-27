import { FC, Fragment } from 'react';
import { ICarPart } from '@autoball-frontend/shared-types';
import { Actions, ApiOperationState, IInfiteScrollResponse } from '../../../../../shared';
import { WheelComponentBrandItem } from './list-item';
import { List } from '../../../../../components';

interface IProps {
  data?: IInfiteScrollResponse<ICarPart>[];
  onChoose: (data: ICarPart & Actions) => void;
  libRef: (node?: Element | null) => void;
  states: ApiOperationState;
}

export const WheelComponentsBrandsList: FC<IProps> = ({ data, onChoose, libRef, states }) => {

  return (
    <List isPending={states.isPending} isError={states.isError} empty={!data?.length} >
      {data?.map((el, idx) => (
        <Fragment key={el.items[idx]?.id}>
          {el?.items.map((item) => (
            <WheelComponentBrandItem key={item.id} {...item} onChoose={onChoose} />
          ))}
        </Fragment>
      ))}
      <li ref={libRef} />
    </List>
  );
};
