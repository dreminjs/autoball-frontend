import { FC } from 'react';
import { data } from '../../model/navigation.data';
import { NavigationItem } from './navigation-item';
import { Container } from '@/components/container';
import clsx from 'clsx';
import { useGetMe } from '@/shared/api/user/queries';
import { SignoutButton } from './signout-button';
import { CartButton } from './cart-button';

interface IProps {
  navClassName?: string;
  ulClassName?: string;
}

export const NavigationList: FC<IProps> = ({
  navClassName,
  ulClassName = 'justify-between',
}) => {
  const { data: user } = useGetMe();


  return (
    <nav className={clsx('bg-teal-500', navClassName)}>
      <Container>
        <ul className={clsx('flex', ulClassName)}>
          {data.map((el, idx) => (
            <NavigationItem to={`/${el.to}`} content={el.content} key={idx} />
          ))}
          {user?.name ? (
            <>
              <NavigationItem to={'/moi-zakazi'} content={'Мои заказы'} />
              <CartButton />
              <SignoutButton />
            </>
          ) : (
            <>
              <NavigationItem to={'/signin'} content={'Вход'} />
              <NavigationItem to={'/signup'} content={'Регистрация'} />
            </>
          )}
        </ul>
      </Container>
    </nav>
  );
};
