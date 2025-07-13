import { FC } from 'react';
import { PhonesItem } from './phones-item';

export const PhonesList: FC = () => {
  return (
    <ul
      className='hidden md:block'
      aria-label="Наши контакты"
      itemScope
      itemType="https://schema.org/ItemList"
    >
        <PhonesItem content={'+375(29)917-00-70'} messagers={["viber"]}/> 
        <PhonesItem content={'+375(33)331-99-11'} messagers={["viber","whatsapp"]}/> 
        <PhonesItem content={'+375(29)879-47-94'} messagers={["whatsapp"]}/> 
    </ul>
  );
};
