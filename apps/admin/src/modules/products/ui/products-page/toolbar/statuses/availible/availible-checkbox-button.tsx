import { Button } from '../../../../../../../components/buttons';
import { useToggleAvailibleStatusCheckbox } from '../../../../../model/hooks/use-toggle-availible-status-checkbox';

export const AvailibleCheckboxButton = () => {
  const {showAvailibleCheckboxes, onToggleAvailibleCheckbox, onConfirmAvailible, checkboxes} = useToggleAvailibleStatusCheckbox();

  return (
    <div>
      {!showAvailibleCheckboxes ? (
        <Button onClick={onToggleAvailibleCheckbox}>
          Отметить доступные товары
        </Button>
      ) : (
        <div className="flex gap-2">
          <Button
            onClick={onConfirmAvailible}
            disabled={checkboxes && checkboxes?.length < 1}
          >
            Отметить
          </Button>
          <Button onClick={onToggleAvailibleCheckbox}>Отмена</Button>
        </div>
      )}
    </div>
  );
};
