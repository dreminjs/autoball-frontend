import { useMutation, useQueryClient } from '@tanstack/react-query';
import { index } from './service';
import { isAuthAtom } from '@/app/auth.atom';
import { useSetAtom } from 'jotai';
import { SERVICE_URLS, QUERY_KEYS } from '@/shared/constants';

export const useSignout = () => {
  const setIsAuth = useSetAtom(isAuthAtom);

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => index(),
    onSuccess: () => {
      localStorage.removeItem("accessToken")
      setIsAuth(false);
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.user, QUERY_KEYS.me]
      })
    },
  });
};
