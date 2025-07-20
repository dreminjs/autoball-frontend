import { FC } from 'react';
import clsx from 'clsx';

interface IProps {
  label: string;
  value: React.ReactNode;
  className?: string;
  itemProp: string;
}

export const InfoRow: FC<IProps> = ({ label, value, className, itemProp }) => (
  <li className={clsx('flex items-start gap-2', className)} {...{ itemProp }}>
    <span className="text-gray-500 min-w-[70px]">{label}:</span>
    <span>{value}</span>
  </li>
);
