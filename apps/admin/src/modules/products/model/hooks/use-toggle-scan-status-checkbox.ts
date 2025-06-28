import { useAtomValue } from 'jotai';
import {
  checkboxesAtom,
} from '../atoms-page';
import { useToggleScanStatus } from '../api/queries';
import { useState } from 'react';

export const useToggleScanStatusCheckbox = () => {
  const checkboxes = useAtomValue(checkboxesAtom);

  const { toggleScanStatus } = useToggleScanStatus();

  const [showScanCheckboxes, setShowScanCheckboxes] = useState(
    false
  );

  const [showUnscanCheckboxes, setShowUnscanCheckboxes] = useState(
    false
  );

  const handleToggleUnscanCheckbox = () => {
    showScanCheckboxes && handleToggleScanCheckbox();
    setShowUnscanCheckboxes((prev) => !prev);
  };

  const handleToggleScanCheckbox = () => {
    showUnscanCheckboxes && handleToggleUnscanCheckbox();
    setShowScanCheckboxes((prev) => !prev);
  };

  const handleConfirmScan = () => {
    if (checkboxes && checkboxes?.length > 0) {
      handleToggleScanCheckbox();
      toggleScanStatus({
        is_printed: false,
        products_id: checkboxes,
      });
    }
  }
  
    const handleConfirmUnscan = () => {
      if (checkboxes && checkboxes?.length > 0) {
        handleToggleUnscanCheckbox();
        toggleScanStatus({
          is_printed: false,
          products_id: checkboxes,
        });
      }
    };

  return {
    showScanCheckboxes,
    showUnscanCheckboxes,
    onToggleUnscanCheckbox: handleToggleUnscanCheckbox,
    onToggleScanCheckbox: handleToggleScanCheckbox,
    checkboxes,
    onConfirmScan: handleConfirmScan,
    onConfirmUnscan: handleConfirmUnscan,
  };
};
