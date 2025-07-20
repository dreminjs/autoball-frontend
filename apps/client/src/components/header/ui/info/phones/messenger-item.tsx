import { getMessangerLink } from '@/components/header/model/get-messanger-link';
import { Messengers } from '@/components/header/model/types';
import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';
interface Props {
  messenger?: Messengers;
  tel: string;
}

export const MessengerItem: FC<Props> = ({ messenger, tel }) => {
  return (
    <Link
      key={messenger}
      href={getMessangerLink(tel, messenger)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Написать в ${messenger} на номер ${tel}`}
      className="hover:opacity-80 transition-opacity"
    >
      <Image width={30} height={30} src={`/${messenger}.svg`} alt={'мессенджер'} />
    </Link>
  );
};
