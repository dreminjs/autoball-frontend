import { useUsers } from '../../model/hooks/use-users';
import { UserList } from './list/list';
import { Toolbar } from './toolbar/toolbar';

export const UsersPage = () => {
  const {
    data,
    states,
    onChangeName,
    onChangeRole,
    onPhoneNumberChange,
    name,
    phoneNumber,
    role,
    ref,
  } = useUsers();

  return (
    <>
      <Toolbar
        userName={name}
        onChangeName={onChangeName}
        phoneNumber={phoneNumber}
        onChangePhoneNumber={onPhoneNumberChange}
        onChangeRole={onChangeRole}
        role={role}
      />
      <UserList
        ref={ref}
        states={states}
        data={data}
      />
    </>
  );
};
