import { FC, PropsWithChildren } from 'react';

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className='w-[75%] mx-auto'>{children}</div>;
};
