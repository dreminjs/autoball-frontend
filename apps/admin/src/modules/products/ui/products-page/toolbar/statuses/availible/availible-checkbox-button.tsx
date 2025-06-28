import { Button } from '../../../../../../../components/buttons';
import { useToggleScanStatusCheckbox } from '../../../../../model/hooks/use-toggle-scan-status-checkbox';

export const AvailibleCheckboxButton = () => {
  const {
    onToggleScanCheckbox,
    showScanCheckboxes,
    checkboxes,
    onConfirmScan
  } = useToggleScanStatusCheckbox();

  return (
    <div>
      {!showScanCheckboxes ? (
        <Button onClick={onToggleScanCheckbox}>
          Отметить доступные товары
        </Button>
      ) : (
        <div className="flex gap-2">
          <Button
            onClick={onConfirmScan}
            disabled={checkboxes && checkboxes?.length < 1}
          >
            Отметить
          </Button>
          <Button onClick={onToggleScanCheckbox}>
            Отмена
          </Button>
        </div>
      )}
    </div>
  );
};