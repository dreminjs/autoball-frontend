import { FC } from 'react';
import { Select } from '../../../../../shared/ui/select';
import { Role } from '@autoball-frontend/shared-types';
import { rolesOptions } from '../../../model/data';
import { FilterInput } from './filter-input';

interface IProps {
  userName: string;
  onChangeName: (data: string) => void;
  phoneNumber: string;
  onChangePhoneNumber: (data: string) => void;
  onChangeRole: (data: Role | null) => void;
  role: Role | null;
}

export const Toolbar: FC<IProps> = ({
  userName,
  phoneNumber,
  onChangeName,
  onChangePhoneNumber,
  onChangeRole,
  role,
}) => {
  return (
    <div className="flex items-center justify-between">
      <FilterInput label={'Имя'} onChange={onChangeName} value={userName} />
      <FilterInput
        label={'Номер Телефона'}
        onChange={onChangePhoneNumber}
        value={phoneNumber}
      />
      <Select
        label={'Роль'}
        onChange={(e) =>
          onChangeRole(
            e.target.value === 'not-matter' ? null : (e.target.value as Role)
          )
        }
        options={rolesOptions}
        value={role || null}
      />
    </div>
  );
};
