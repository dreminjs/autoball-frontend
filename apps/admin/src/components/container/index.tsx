import { FC, PropsWithChildren } from 'react';

export const Container: FC<PropsWithChildren & { className?: string }> = ({
  children,
  className
}) => {
  return (
    <div className={`w-full sm:w-[90%] md:w-[75%] xl:w-[55%] mx-auto px-2 ${className}`}>
      {children}
    </div>
  );
};
