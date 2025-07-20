import { useMutation, useQueryClient } from '@tanstack/react-query';
import { index } from './service';
import { QUERY_KEYS, SERVICE_URLS } from '../../../../shared/constants';

export const useSignout = () => {

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => index(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.user, QUERY_KEYS.me]
      })
      localStorage.clear();
    },
  });
};
