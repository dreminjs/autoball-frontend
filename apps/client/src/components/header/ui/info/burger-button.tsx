import { FC } from 'react';
import Image from 'next/image';

export const BurgerButton: FC = () => {
  return (
    <button>
      <Image
        width={30}
        height={30}
        src={'/icon-menu.svg'}
        alt={'Бургер кнопка'}
      />
    </button>
  );
};
