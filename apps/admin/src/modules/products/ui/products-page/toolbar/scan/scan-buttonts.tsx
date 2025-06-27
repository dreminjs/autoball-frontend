import { ScanCheckboxButton } from './scan-checkbox-button';
import { UnscanCheckboxButton } from './unscan-checkbox-button';

export const ScanButtons = () => {
  return (
    <div className="flex gap-2">
      <ScanCheckboxButton />
      <UnscanCheckboxButton />
    </div>
  );
};
