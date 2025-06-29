import { Button } from "../../../../../../../components/buttons";
import { useToggleAvailableStatusCheckbox } from "../../../../../model/hooks/use-toggle-availible-status-checkbox";

export const UnavailableCheckboxButton = () => {
  const {
    checkboxes,
    showUnavailableCheckboxes,
    onToggleUnavailableCheckbox,
    onConfirmUnavailable
  } = useToggleAvailableStatusCheckbox();

  return (
    <div>
      {!showUnavailableCheckboxes ? (
        <Button variant="default" onClick={onToggleUnavailableCheckbox}>
          Отметить недоступные товары
        </Button>
      ) : (
        <div className="flex gap-2">
          <Button
            variant="default"
            onClick={onConfirmUnavailable}
            disabled={checkboxes && checkboxes?.length < 1}
          >
            Отметить
          </Button>
          <Button variant="default" onClick={onToggleUnavailableCheckbox}>
            Отмена
          </Button>
        </div>
      )}
    </div>
  );
};