import Modal from '@mui/material/Modal';
import { FC } from 'react';
import { useDeleteCarSeries } from '../../api/queries';
import { ICarSeries } from '@autoball-frontend/shared-types';
import { CustomSnackbar } from '../../../../components';
import { useSnackbarVisible } from '../../../../shared/hooks/use-snackbar-visible';
import { getSnackbarMessage, ModalLayout } from '../../../../shared';
import { getSnackbarSeverity } from '../../../../shared/lib/get-snackbar-severity';
import { useQueryClient } from '@tanstack/react-query';
import { SERVICE_URLS } from '../../../../shared/constants';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  series: Partial<ICarSeries>;
}

export const DeleteSeriesModal: FC<IProps> = ({ isOpen, onClose, series }) => {
  const queryClient = useQueryClient();

  const handleOnSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: [SERVICE_URLS.carseries],
    });

    setTimeout(() => {
      onHideSnackbar();
      onClose();
    }, 2000);
  };

  const { mutate, isError, isPending, isSuccess, error } = useDeleteCarSeries(
    series.car_brand_id
  );

  const { snackbarOpen, onHideSnackbar } = useSnackbarVisible({
    state: isError || isPending || isSuccess,
  });

  return (
    <>
      <ModalLayout
        isOpen={isOpen}
        onClose={onClose}
      >
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
            Вы уверены, что хотите удалить:{' '}
            <span className="text-red-600">{series.name}</span> ?
          </h2>

          <div className="flex justify-center space-x-4">
            <button
              className="px-6 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              onClick={() =>
                series.id && mutate(series.id, { onSuccess: handleOnSuccess })
              }
            >
              Да, удалить
            </button>

            <button
              className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
              onClick={onClose}
            >
              Нет, отмена
            </button>
          </div>
      </ModalLayout>
      <CustomSnackbar
        isOpen={snackbarOpen}
        severity={getSnackbarSeverity({
          isError,
          isSuccess,
          isPending,
        })}
        message={getSnackbarMessage(
          {
            isError,
            isSuccess,
            isPending,
          },
          { error: error?.response?.data.detail || 'error' }
        )}
      />
    </>
  );
};
