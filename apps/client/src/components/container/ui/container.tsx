import { PropsWithChildren } from 'react';
import clsx from 'clsx';

type Props = PropsWithChildren & { className?: string };

export const Container = ({ children, className }: Props) => {
  return <div className={clsx('max-w-[1600px] mx-auto', className)}>{children}</div>;
};
