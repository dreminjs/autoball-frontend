import { useMutation } from '@tanstack/react-query';
import { index } from './service';
import { isAuthAtom } from '@/app/auth.atom';
import { useSetAtom } from 'jotai';

export const useSignout = () => {
  const setIsAuth = useSetAtom(isAuthAtom);

  return useMutation({
    mutationFn: () => index(),
    onSuccess: () => {
      setIsAuth(false);
      localStorage.clear()
    },
  });
};
