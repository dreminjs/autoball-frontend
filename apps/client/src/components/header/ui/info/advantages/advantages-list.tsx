import { data } from '@/components/header/model/advantages-data';
import { FC } from 'react';
import { AdvantagesItem } from './advantages-item';

export const AdvantagesList: FC = () => {
  return (
    <ul
      className='hidden md:block'
      aria-label="Наши преимущества"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {data.map((el, idx) => (
        <AdvantagesItem key={idx} content={el} />
      ))}
    </ul>
  );
};
