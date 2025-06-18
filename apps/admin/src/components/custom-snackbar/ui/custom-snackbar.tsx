import Alert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { FC } from 'react';

type IProps = {
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
    <Snackbar open={isOpen} autoHideDuration={4000}>
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
