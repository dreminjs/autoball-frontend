import { useAtom } from 'jotai';
import { Select } from '../../../../../shared/ui/select';
import { isPrintedStatusAtom } from '../../../model/product-atoms-page';

export const ChoosePrintedStatus = () => {
  const [isPrintedStatus, setIsPrintedStatus] = useAtom(isPrintedStatusAtom);

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const value =
      target.value === 'not-matter' ? null : JSON.parse(target.value);

    setIsPrintedStatus(value);
  };

  return (
    <Select
      value={String(isPrintedStatus)}
      label={'Статус распечатки'}
      onChange={handleOnChange}
      options={[
        {
          title: "Распечатаные",
          value: "true",
        },
        {
          title: "Не распечатаные",
          value: "false",
        },
      ]}
    />
  );
};
