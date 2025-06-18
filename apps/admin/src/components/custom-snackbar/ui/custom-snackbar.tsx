import Alert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { FC } from 'react';

type IProps = {
  onClose: () => void;
  isOpen: boolean;
  message: string;
} & AlertProps;

export const CustomSnackbar: FC<IProps> = ({
  isOpen,
  onClose,
  severity,
  message,
}) => {
  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={onClose}>
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
