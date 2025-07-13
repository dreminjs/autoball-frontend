import { Messengers } from '@/components/header/model/types';
import Link from 'next/link';
import { FC } from 'react';
import { MessengerItem } from './messenger-item';

interface Props {
  content: string;
  messagers: Messengers[];
  tag?: 'li' | 'div';
}

export const PhonesItem: FC<Props> = ({
  content,
  messagers,
  tag: Tag = 'li',
}) => {
  return (
    <Tag className="flex gap-4 mb-2 text-xl">
      <Link className="hover:underline active:underline" href={`tel:+${content.replace(/\D/g, '')}`}>
        <p>{content}</p>
      </Link>
      <div className="flex gap-2">
        {messagers.map(
          (el, idx) =>
            el && <MessengerItem key={idx} tel={content} messenger={el} />
        )}
      </div>
    </Tag>
  );
};
