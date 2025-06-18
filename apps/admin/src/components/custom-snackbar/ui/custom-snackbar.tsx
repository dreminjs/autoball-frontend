import Alert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { FC, useEffect } from 'react';

type IProps = {
  isOpen: boolean;
  message: string | null
} & AlertProps;

export const CustomSnackbar: FC<IProps> = ({
  isOpen,
  severity,
  message,
}) => {

  useEffect(() => {
    console.log(message)
  },[message])

  return (
    <Snackbar open={isOpen} autoHideDuration={3000}>
      <Alert
        severity={severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
