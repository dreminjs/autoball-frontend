import { FC } from 'react';
import clsx from 'clsx';

interface IProps {
  label: string;
  value: React.ReactNode;
  className?: string;
}

export const InfoRow: FC<IProps> = ({ label, value, className }) => (
  <div className={clsx('flex items-start gap-2', className)}>
    <span className="text-gray-500 min-w-[70px]">{label}:</span>
    <span>{value}</span>
  </div>
);
