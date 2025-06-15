import { useSetAtom } from 'jotai';
import { Select } from '../../../../../shared/ui/select';
import { isPrintedStatusAtom } from '../../../model/store-page';

export const ChoosePrintedStatus = () => {
  const setIsPrintedStatus = useSetAtom(isPrintedStatusAtom);

  const handleOnChange = ({ target, }: React.ChangeEvent<HTMLSelectElement>) => {
    const value =
      target.value === 'not-matter' ? null : JSON.parse(target.value)

    setIsPrintedStatus(value);
  };

  return (
    <Select
      label={'Статус распечатки'}
      onChange={handleOnChange}
      options={[
        {
          title: 'Распечатаные',
          value: true,
        },
        {
          title: 'Не распечатаные',
          value: false,
        }
      ]}
    />
  );
};
