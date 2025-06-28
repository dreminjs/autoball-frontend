import { Button } from "../../../../../../../components/buttons";
import { useToggleScanStatusCheckbox } from "../../../../../model/hooks/use-toggle-scan-status-checkbox";
export const UnscanCheckboxButton = () => {
  const {
    onToggleUnscanCheckbox,
    showUnscanCheckboxes,
    checkboxes,
    onConfirmUnscan,
  } = useToggleScanStatusCheckbox();

  return (
    <div>
      {!showUnscanCheckboxes ? (
        <Button onClick={onToggleUnscanCheckbox}>
          Отметить нераспечатанные товары
        </Button>
      ) : (
        <div className="flex gap-2">
          <Button
            variant="default"
            onClick={onConfirmUnscan}
            disabled={checkboxes && checkboxes?.length < 1}
          >
            Отметить
          </Button>
          <Button variant="default" onClick={onToggleUnscanCheckbox}>
            Отмена
          </Button>
        </div>
      )}
    </div>
  );
};
