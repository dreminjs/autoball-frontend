import { Role } from '@autoball-frontend/shared-types';
import { useEffect, useState } from 'react';
import { useGetUsers } from '../../api/queries';
import { useDebounce } from 'use-debounce';
import { useInView } from 'react-intersection-observer';

export const useUsers = () => {

  const {ref, inView} = useInView()
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState<'active' | 'banned' | null>(null);
  const [role, setRole] = useState<Role | null>(null);

  const [debouncedName] = useDebounce(name, 300)

  const [debouncedPhoneNumber] = useDebounce(phoneNumber, 300)

  const handleChangeName = (value: string) => {
    setName(value);
  };

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handleStatusChange = (value: 'active' | 'banned' | null) => {
    setStatus(value);
  };

  const handleChangeRole = (value: Role | null) => {
    setRole(value);
  };

  const { data, isError, isLoading, isSuccess, error, fetchNextPage, hasNextPage } = useGetUsers({
    name: debouncedName,
    phone_number: debouncedPhoneNumber,
    status,
    role,
    take: 5,
  });

  useEffect(() => {
    if(hasNextPage && inView){
      fetchNextPage()
    }
  },[fetchNextPage, hasNextPage, inView])

  return {
    onChangeName: handleChangeName,
    onPhoneNumberChange: handlePhoneNumberChange,
    onStatusChange: handleStatusChange,
    onChangeRole: handleChangeRole,
    data,
    states: {
      error,
      isError,
      isPending: isLoading,
      isSuccess,
    },
    name,
    phoneNumber,
    status,
    role,
    ref
  };
};
