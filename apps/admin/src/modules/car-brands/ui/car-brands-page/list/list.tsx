import { FC, Fragment } from 'react';
import { ICarBrand } from '@autoball-frontend/shared-types';
import { Actions } from '../../../model/types/actions';
import { IInfiteScrollResponse } from '../../../../../shared';
import { CarBrandItem } from './list-item';
import { ApiOperationState } from '../../../../../shared/interfaces/api-operation-state.interface';
import { List } from '../../../../../components';

interface IProps {
  data?: IInfiteScrollResponse<ICarBrand>[];
  onChoose: (data: ICarBrand & Actions) => void;
  libRef: (node?: Element | null) => void;
  states: ApiOperationState;
}

export const CarBrandList: FC<IProps> = ({
  data,
  onChoose,
  libRef,
  states,
}) => {

  return (
    <List
      isPending={states.isPending}
      isError={states.isError}
      empty={!data?.length}
      error={states.error?.response?.data.detail}
    >
      {data?.map((el, idx) => (
        <Fragment key={el.items[idx]?.id}>
          {el?.items.map((item) => (
            <CarBrandItem key={item.id} {...item} onChoose={onChoose} />
          ))}
        </Fragment>
      ))}
      <li ref={libRef} />
    </List>
  );
};
