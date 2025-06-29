import { useAtom } from 'jotai';
import {
  checkboxesAtom,
  showAvailibeCheckboxesAtom,
  showScanCheckboxesAtom,
  showUnavalibleCheckboxesAtom,
  showUnscanCheckboxesAtom,
} from '../atoms-page';
import { useToggleAvailableStatus } from '../api/queries';

export const useToggleAvailableStatusCheckbox = () => {
  const [checkboxes, setCheckboxes] = useAtom(checkboxesAtom);
  const [showAvailableCheckboxes, setShowAvailableCheckboxes] = useAtom(
    showAvailibeCheckboxesAtom
  );
  const [showUnavailableCheckboxes, setShowUnavailableCheckbox] = useAtom(
    showUnavalibleCheckboxesAtom
  );
  const [showScanCheckboxes, setShowScanCheckboxes] = useAtom(
    showScanCheckboxesAtom
  );
  const [showUnscanCheckboxes, setShowUnscanCheckboxes] = useAtom(
    showUnscanCheckboxesAtom
  );
  const { toggleAvailableStatus } = useToggleAvailableStatus();

  const resetOtherStates = (exclude: 'availible' | 'unavailible') => {
    setCheckboxes([]);
    if (exclude !== 'availible' && showAvailableCheckboxes) {
      setShowAvailableCheckboxes(false);
    }
    if (exclude !== 'unavailible' && showUnavailableCheckboxes) {
      setShowUnavailableCheckbox(false);
    }
    if (showScanCheckboxes) setShowScanCheckboxes(false);
    if (showUnscanCheckboxes) setShowUnscanCheckboxes(false);
  };

  const handleToggleUnavailibleCheckbox = () => {
    setShowUnavailableCheckbox((prev) => {
      const newValue = !prev;
      if (newValue) {
        resetOtherStates('unavailible');
      }
      return newValue;
    });
  };

  const handleToggleAvailibleCheckbox = () => {
    setShowAvailableCheckboxes((prev) => {
      const newValue = !prev;
      if (newValue) {
        resetOtherStates('availible');
      }
      return newValue;
    });
  };

  const handleConfirmAvailable = () => {
    if (checkboxes && checkboxes?.length > 0) {
      setShowAvailableCheckboxes(false);
      toggleAvailableStatus({
        is_available: true,
        products_id: checkboxes,
      });
    }
  };

  const handleConfirmUnavailable = () => {
    if (checkboxes && checkboxes?.length > 0) {
      setShowUnavailableCheckbox(false);
      toggleAvailableStatus({
        is_available: false,
        products_id: checkboxes,
      });
    }
  };

  return {
    showAvailableCheckboxes,
    showUnavailableCheckboxes,
    onToggleUnavailableCheckbox: handleToggleUnavailibleCheckbox,
    onToggleAvailableCheckbox: handleToggleAvailibleCheckbox,
    checkboxes,
    onConfirmAvailable: handleConfirmAvailable,
    onConfirmUnavailable: handleConfirmUnavailable,
  };
};
