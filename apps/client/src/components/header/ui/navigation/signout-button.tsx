import { useSignout } from '@/shared/api/signout/queries';

export const SignoutButton = () => {
  const { mutate } = useSignout();

  return (
    <button className="text-white p-5" onClick={() => mutate()}>
      Выход
    </button>
  );
};
