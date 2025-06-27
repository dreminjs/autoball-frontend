import { Button } from '../../../../../../components/buttons';
import { useToggleScanStatusCheckbox } from '../../../../model/hooks/use-toggle-scan-status-checkbox';

export const ScanCheckboxButton = () => {
  const {
    onToggleScanCheckbox,
    showScanCheckboxes,
    checkboxes,
    onConfirmScan
  } = useToggleScanStatusCheckbox();

  return (
    <div className='border-2 p-2 rounded-lg'>
      {!showScanCheckboxes ? (
        <Button variant="default" onClick={() => onToggleScanCheckbox()}>
          Отметить распечатаные товары
        </Button>
      ) : (
        <div className="flex gap-2">
          <Button
            variant="default"
            onClick={() => onConfirmScan()}
            disabled={checkboxes && checkboxes.length < 1}
          >
            Отметить
          </Button>
          <Button
            variant="default"
            onClick={() => onToggleScanCheckbox()}
          >
            Отмена
          </Button>
        </div>
      )}
    </div>
  );
};
