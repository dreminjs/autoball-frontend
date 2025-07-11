import { IUser, Role } from '@autoball-frontend/shared-types';
import { FC, useState } from 'react';
import { useChangeRole } from '../../../api/queries';
import { rolesOptions } from '../../../model/data';

type Props = IUser & { currentUserRole: Role };

export const UserItem: FC<Props> = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role>(props.role);
  const { mutate: changeRole, isPending } = useChangeRole();

  const handleSave = () => {
    changeRole(
      { userId: props.id, role: selectedRole },
      {
        onSuccess: () => setIsEditing(false),
      }
    );
  };

  const handleCancel = () => {
    setSelectedRole(props.role);
    setIsEditing(false);
  };

  const canEdit = props.currentUserRole === 'admin';

  return (
    <li className="border rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">
            {props.name}{' '}
            <span className={`py-1 rounded-full text-lg font-medium`}>
              ({props.role})
            </span>
          </h3>
          <p className="text-gray-600">{props.email}</p>
          <p className="text-gray-600">{props.phone_number}</p>
        </div>

        {canEdit && (
          <div className="flex flex-col items-end gap-2">
            {isEditing ? (
              <>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value as Role)}
                  className="border rounded px-2 py-1 w-full"
                  disabled={isPending}
                >
                  {rolesOptions.map((role) => (
                    <option key={role.value} value={role.value}>
                      {role.title}
                    </option>
                  ))}
                </select>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={handleSave}
                    disabled={isPending}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 disabled:opacity-50"
                  >
                    {isPending ? 'Сохранение...' : 'Сохранить'}
                  </button>
                  <button
                    onClick={handleCancel}
                    disabled={isPending}
                    className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400 disabled:opacity-50"
                  >
                    Отмена
                  </button>
                </div>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="text-blue-500 hover:text-blue-700"
              >
                Изменить роль
              </button>
            )}
          </div>
        )}
      </div>
    </li>
  );
};
