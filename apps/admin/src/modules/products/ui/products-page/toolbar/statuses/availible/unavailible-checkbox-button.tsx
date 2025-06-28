import { Button } from "../../../../../../../components/buttons";
import { useToggleAvailibleStatusCheckbox } from "../../../../../model/hooks/use-toggle-availible-status-checkbox";

export const UnavailibleCheckboxButton = () => {
  const {
    checkboxes,
    showUnavailibleCheckboxes,
    onConfirmUnavailible,
    onToggleUnavailibleCheckbox
  } = useToggleAvailibleStatusCheckbox();

  return (
    <div>
      {!showUnavailibleCheckboxes ? (
        <Button variant="default" onClick={onToggleUnavailibleCheckbox}>
          Отметить недоступные товары
        </Button>
      ) : (
        <div className="flex gap-2">
          <Button
            variant="default"
            onClick={onConfirmUnavailible}
            disabled={checkboxes && checkboxes?.length < 1}
          >
            Отметить
          </Button>
          <Button variant="default" onClick={onToggleUnavailibleCheckbox}>
            Отмена
          </Button>
        </div>
      )}
    </div>
  );
};