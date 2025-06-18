import { useEffect, useState } from 'react';

export const useSnackbarVisible = ({ state }: { state: boolean }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleHideSnackbar = () => setSnackbarOpen(false);

  useEffect(() => {
    console.log(state)
    setSnackbarOpen(state);
  }, [state]);

  return { snackbarOpen, onHideSnackbar: handleHideSnackbar };
};
