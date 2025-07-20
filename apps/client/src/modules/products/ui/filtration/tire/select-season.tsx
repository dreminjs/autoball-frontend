import { Select } from '@/components/select';
import { seasonsOptions } from '@/modules/products/model/data';
import { tiresSeasonAtom } from '@/modules/products/model/product-atoms-page';
import { TTiresSeason } from '@/shared/types';
import { useAtom } from 'jotai';

export const SelectSeason = () => {
  const [tiresSeason, setTiresSeason] = useAtom(tiresSeasonAtom);

  return (
    <Select
      value={tiresSeason}
      label={'Сезон'}
      onChange={(e) =>
        setTiresSeason(
          e.target.value === 'not-matter'
            ? null
            : (e.target.value as TTiresSeason)
        )
      }
      options={seasonsOptions.map((el) => ({ title: el, value: el }))}
    />
  );
};
