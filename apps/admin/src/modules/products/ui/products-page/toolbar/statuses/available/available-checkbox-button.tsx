import { Button } from '../../../../../../../components/buttons';
import { useToggleAvailableStatusCheckbox } from '../../../../../model/hooks/use-toggle-availible-status-checkbox';

export const AvailableCheckboxButton = () => {
  const {
    showAvailableCheckboxes,
    onToggleAvailableCheckbox,
    onConfirmAvailable,
    checkboxes,
  } = useToggleAvailableStatusCheckbox();

  return (
    <div>
      {!showAvailableCheckboxes ? (
        <Button onClick={onToggleAvailableCheckbox}>
          Отметить доступные товары
        </Button>
      ) : (
        <div className="flex gap-2">
          <Button
            onClick={onConfirmAvailable}
            disabled={checkboxes && checkboxes?.length < 1}
          >
            Отметить
          </Button>
          <Button onClick={onToggleAvailableCheckbox}>Отмена</Button>
        </div>
      )}
    </div>
  );
};
