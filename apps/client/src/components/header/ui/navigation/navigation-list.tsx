import { FC } from 'react';
import { data } from '../../model/navigation.data';
import { NavigationItem } from './navigation-item';
import { Container } from '@/components/container';
import clsx from 'clsx';

interface IProps {
    navClassName?: string
    ulClassName?: string
}

export const NavigationList: FC<IProps> = ({ navClassName, ulClassName = "justify-between"}) => {
  return (
    <nav className={clsx('bg-teal-500', navClassName)}>
      <Container>
        <ul className={clsx("flex", ulClassName)}>
          {data.map((el, idx) => (
            <NavigationItem to={el.to} content={el.content} key={idx} />
          ))}
        </ul>
      </Container>
    </nav>
  );
};
