import { useSignout } from '../../model/api/queries';

export const LogoutButton = () => {
  const { mutate } = useSignout();
  return <button onClick={() => mutate()}>Выйти</button>;
};
