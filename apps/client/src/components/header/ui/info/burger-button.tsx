import { FC } from 'react';
import Image from 'next/image';
import { useSetAtom } from 'jotai';
import { isMenuDrawerOpenAtom } from '@/modules/products/model/menu-drawer.atom';

export const BurgerButton: FC = () => {

  const setIsMenuDrawerVisible = useSetAtom(isMenuDrawerOpenAtom)

  return (
    <button className='md:hidden' onClick={() => setIsMenuDrawerVisible(true)}>
      <Image
        width={30}
        height={30}
        src={'/icon-menu.svg'}
        alt={'Бургер кнопка'}
      />
    </button>
  );
};
