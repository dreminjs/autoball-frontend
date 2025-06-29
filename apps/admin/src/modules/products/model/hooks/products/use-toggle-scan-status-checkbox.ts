import { useAtom, useAtomValue } from 'jotai';
import {
  checkboxesAtom,
  showAvailibeCheckboxesAtom,
  showScanCheckboxesAtom,
  showUnavalibleCheckboxesAtom,
  showUnscanCheckboxesAtom,
} from '../../product-atoms-page';
import { useToggleScanStatus } from '../../api/queries';

export const useToggleScanStatusCheckbox = () => {
  const checkboxes = useAtomValue(checkboxesAtom);
  const { toggleScanStatus } = useToggleScanStatus();
  const [showScanCheckboxes, setShowScanCheckboxes] = useAtom(
    showScanCheckboxesAtom
  );
  const [showUnscanCheckboxes, setShowUnscanCheckboxes] = useAtom(
    showUnscanCheckboxesAtom
  );
  const [showAvailibleCheckboxes, setShowAvailibleCheckboxes] = useAtom(
    showAvailibeCheckboxesAtom
  );
  const [showUnavailibleCheckboxes, setShowUnavailibleCheckbox] = useAtom(
    showUnavalibleCheckboxesAtom
  );

  const resetOtherStates = (exclude: 'scan' | 'unscan') => {
    if (exclude !== 'scan' && showScanCheckboxes) {
      setShowScanCheckboxes(false);
    }
    if (exclude !== 'unscan' && showUnscanCheckboxes) {
      setShowUnscanCheckboxes(false);
    }
    if (showAvailibleCheckboxes) setShowAvailibleCheckboxes(false);
    if (showUnavailibleCheckboxes) setShowUnavailibleCheckbox(false);
  };

  const handleToggleUnscanCheckbox = () => {
    setShowUnscanCheckboxes((prev) => {
      const newValue = !prev;
      if (newValue) {
        resetOtherStates('unscan');
      }
      return newValue;
    });
  };

  const handleToggleScanCheckbox = () => {
    setShowScanCheckboxes((prev) => {
      const newValue = !prev;
      if (newValue) {
        resetOtherStates('scan');
      }
      return newValue;
    });
  };

  const handleConfirmScan = () => {
    if (checkboxes && checkboxes?.length > 0) {
      setShowScanCheckboxes(false);
      toggleScanStatus({
        is_printed: true,
        products_id: checkboxes,
      });
    }
  };

  const handleConfirmUnscan = () => {
    if (checkboxes && checkboxes?.length > 0) {
      setShowUnscanCheckboxes(false);
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
