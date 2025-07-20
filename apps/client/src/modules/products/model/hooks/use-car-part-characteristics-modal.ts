import { useState } from 'react';

export const useCarPartCharacteristicsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => setIsOpen((prev) => !prev);

  return { isOpen, onToggleModal: handleToggleModal };
};
