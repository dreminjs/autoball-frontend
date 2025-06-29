import { useState } from 'react';
import { AvailableButtons } from './available/available-buttons';
import { ScanButtons } from './scan/scan-buttonts';
import { Button } from '../../../../../../components/buttons';

export const ToggleStatues = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex flex-col items-center justify-center">
      <Button onClick={handleToggle}>
        {isOpen ? 'Скрыть операции' : 'Показать операции'}
      </Button>
      {isOpen && (
        <div className="mt-2 border-2 bg-white p-4 rounded-md shadow-lg z-10 w-auto">
          <div className="grid grid-cols-2 gap-4 min-w-max">
            <AvailableButtons />
            <ScanButtons />
          </div>
        </div>
      )}
    </div>
  );
};
