import { FC } from 'react';
import Image from 'next/image';

interface Props {
  content: string;
}

export const AdvantagesItem: FC<Props> = ({ content }) => {
  return (
    <li
      itemProp="itemListElement"
      itemScope
      itemType="https://schema.org/ListItem"
      className='flex gap-2 text-[18px]'
    >
      <Image
        width={25}
        height={25}
        src={'/success-galochka.svg'}
        alt={'success'}
      />{' '}
      {content}
    </li>
  );
};
