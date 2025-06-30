import { Role } from "@autoball-frontend/shared-types";
import { useState } from "react";





export const UserItem = () => {

     const [isEditing, setIsEditing] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role>("admin");

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value as Role);
  };

  const handleSave = () => {
    // onRoleChange(user.id, selectedRole);
    setIsEditing(false);
  };

  const getRoleColor = (role: Role) => {
    // switch (role) {
    //   case Role.ADMIN:
    //     return 'bg-red-100 text-red-800';
    //   case Role.MODERATOR:
    //     return 'bg-blue-100 text-blue-800';
    //   case Role.USER:
    //     return 'bg-green-100 text-green-800';
    //   case Role.GUEST:
    //     return 'bg-gray-100 text-gray-800';
    //   default:
    //     return 'bg-yellow-100 text-yellow-800';
    // }
  };

  return (
    <div className="border rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          {/* <h3 className="text-lg font-semibold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.phone_number}</p> */}
        </div>
        
        {isEditing ? (
          <div className="flex items-center gap-2">
            <select
              value={selectedRole}
              onChange={handleRoleChange}
              className="border rounded px-2 py-1"
            >
              {/* {Object.values(Role).map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))} */}
            </select>
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Сохранить
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
            >
              Отмена
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
              {/* {user.role} */}
            </span>
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500 hover:text-blue-700"
            >
              Изменить
            </button>
          </div>
        )}
      </div>
    </div>
  )
}