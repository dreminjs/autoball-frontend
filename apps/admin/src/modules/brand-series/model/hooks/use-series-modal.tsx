import { useState } from 'react';

export const useSeriesModal = () => {
  const [isPostSeriesOpen, setIsPostSeriesOpen] = useState(false);

  const handleToggleVisibility = () => setIsPostSeriesOpen((prev) => !prev);

  return {
    isOpen: isPostSeriesOpen,
    onToggleVisibility: handleToggleVisibility,
  };
};
