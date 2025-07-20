import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

interface Props {
  className: string
  width: number
  height: number
}

export const Logo: FC<Props> = ({ className, ...props }) => (
  <Link href={'/'} {...{className}}>
    <Image
      {...props}
      priority
      src={'/autoball-logo.png'}
      alt={'Логотип'}
    />
  </Link>
);
