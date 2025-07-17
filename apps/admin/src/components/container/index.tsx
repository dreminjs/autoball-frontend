import { FC, PropsWithChildren } from 'react';

export const Container: FC<PropsWithChildren & { className?: string }> = ({
  children,
  className
}) => {
  return (
    <div className={`w-full md:w-[95%] 2xl:w-[90%] mx-auto px-2 ${className ? className : ""}`}>
      {children}
    </div>
  );
};
