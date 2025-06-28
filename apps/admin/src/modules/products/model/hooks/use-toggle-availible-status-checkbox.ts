import { useAtom } from 'jotai';
import {
  checkboxesAtom,
  showAvailibeCheckboxesAtom,
  showScanCheckboxesAtom,
  showUnavalibleCheckboxesAtom,
  showUnscanCheckboxesAtom,
} from '../atoms-page';

export const useToggleAvailibleStatusCheckbox = () => {
  const [checkboxes, setCheckboxes] = useAtom(checkboxesAtom);
  const [showAvailibleCheckboxes, setShowAvailibleCheckboxes] = useAtom(showAvailibeCheckboxesAtom);
  const [showUnavailibleCheckboxes, setShowUnavailibleCheckbox] = useAtom(showUnavalibleCheckboxesAtom);
  const [showScanCheckboxes, setShowScanCheckboxes] = useAtom(showScanCheckboxesAtom);
  const [showUnscanCheckboxes, setShowUnscanCheckboxes] = useAtom(showUnscanCheckboxesAtom);

  const resetOtherStates = (exclude: 'availible' | 'unavailible') => {
    setCheckboxes([]);
    if (exclude !== 'availible' && showAvailibleCheckboxes) {
      setShowAvailibleCheckboxes(false);
    }
    if (exclude !== 'unavailible' && showUnavailibleCheckboxes) {
      setShowUnavailibleCheckbox(false);
    }
    if (showScanCheckboxes) setShowScanCheckboxes(false);
    if (showUnscanCheckboxes) setShowUnscanCheckboxes(false);
  };

  const handleToggleUnavailibleCheckbox = () => {
    setShowUnavailibleCheckbox(prev => {
      const newValue = !prev;
      if (newValue) {
        resetOtherStates('unavailible');
      }
      return newValue;
    });
  };

  const handleToggleAvailibleCheckbox = () => {
    setShowAvailibleCheckboxes(prev => {
      const newValue = !prev;
      if (newValue) {
        resetOtherStates('availible');
      }
      return newValue;
    });
  };

  const handleConfirmAvailible = () => {
    if (checkboxes && checkboxes?.length > 0) {
      setShowAvailibleCheckboxes(false);
      // TODO: Implement confirm availible
      // toggleAvailibleStatus({
      //   is_availible: true,
      //   products_id: checkboxes,
      // });
    }
  };

  const handleConfirmUnavailible = () => {
    if (checkboxes && checkboxes?.length > 0) {
      setShowUnavailibleCheckbox(false);
      // TODO: Implement confirm unavailible
      // toggleAvailibleStatus({
      //   is_availible: false,
      //   products_id: checkboxes,
      // });
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