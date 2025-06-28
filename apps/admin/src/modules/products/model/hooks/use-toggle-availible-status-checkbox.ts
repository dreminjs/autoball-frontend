import { useAtom } from 'jotai';
import {
  checkboxesAtom,
  showAvailibeCheckboxesAtom,
  showUnavalibleCheckboxesAtom,
} from '../atoms-page';
import { useToggleScanStatus } from '../api/queries';

export const useToggleAvailibleStatusCheckbox = () => {
  const [checkboxes, setCheckboxes] = useAtom(checkboxesAtom);

  const { toggleScanStatus } = useToggleScanStatus();

  const [showAvailibleCheckboxes, setShowAvailibleCheckboxes] = useAtom(
    showAvailibeCheckboxesAtom
  );

  const [showUnavailibleCheckboxes, setShowUnscanCheckboxes] = useAtom(
    showUnavalibleCheckboxesAtom
  );

  const handleToggleUnavailibleCheckbox = () => {
    setCheckboxes([])
    showAvailibleCheckboxes && handleToggleAvailibleCheckbox();
    setShowUnscanCheckboxes((prev) => !prev);
  };

  const handleToggleAvailibleCheckbox = () => {
    setCheckboxes([])
    showUnavailibleCheckboxes && handleToggleUnavailibleCheckbox();
    setShowAvailibleCheckboxes((prev) => !prev);
  };

  const handleConfirmAvailible = () => {
    if (checkboxes && checkboxes?.length > 0) {
      handleToggleAvailibleCheckbox();
      toggleScanStatus({
        is_printed: false,
        products_id: checkboxes,
      });
    }
  }
  
    const handleConfirmUnavailible = () => {
      if (checkboxes && checkboxes?.length > 0) {
        handleToggleUnavailibleCheckbox();
        toggleScanStatus({
          is_printed: false,
          products_id: checkboxes,
        });
      }
    };

  return {
    showAvailibleCheckboxes,
    showUnavailibleCheckboxes,
    onToggleUnavailibleCheckbox: handleToggleUnavailibleCheckbox,
    onToggleAvailibleCheckbox: handleToggleAvailibleCheckbox,
    checkboxes,
    onConfirmAvailible: handleConfirmAvailible,
    onConfirmUnavailible: handleConfirmUnavailible,
  };
};
