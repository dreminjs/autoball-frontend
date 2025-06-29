import { useSetAtom } from 'jotai';
import { Select } from '../../../../../../shared/ui/select';
import { seasonsOptions } from '../../../../model/data';
import { tiresSeasonAtom } from '../../../../model/product-atoms-page';
import { TTiresSeason } from '../../../../../../shared/types';

export const SelectSeason = () => {
  const setTiresSeason = useSetAtom(tiresSeasonAtom);

  return (
    <Select
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
