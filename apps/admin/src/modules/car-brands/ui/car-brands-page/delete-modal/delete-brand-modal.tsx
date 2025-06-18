import { ICarBrand } from '@autoball-frontend/shared-types';
import Modal from '@mui/material/Modal';
import { FC } from 'react';
import { useDeleteCarBrand } from '../../../../../shared/api/brand/queries';
import { SERVICE_URLS } from '../../../../../shared/constants';
import { useQueryClient } from '@tanstack/react-query';
import { CustomSnackbar } from '../../../../../components';
import { useSnackbarVisible } from '../../../../../shared/hooks/use-snackbar-visible';
import {
  getDeleteCarBrandSnackbarMessage,
} from '../../../model/lib/helpers';
import { getSnackbarSeverity } from '../../../../../shared/lib/get-snackbar-severity';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  brand: Partial<Omit<ICarBrand, 'picture'>>;
};

export const DeleteBrandModal: FC<Props> = ({ isOpen, onClose, brand }) => {
  const queryClient = useQueryClient();
  const { mutate, isError, isPending, isSuccess, error, reset } =
    useDeleteCarBrand();

  const { snackbarOpen, onHideSnackbar } = useSnackbarVisible({
    state: isError || isPending || isSuccess,
  });

  const handleOnSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: [SERVICE_URLS.carbrand],
    });

    setTimeout(() => {
      reset()
      onClose();
      onHideSnackbar();
    }, 1000);
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={onClose}
        className="flex items-center justify-center p-5 z-50"
      >
        <div className="relative max-w-[500px] w-full overflow-y-auto bg-white rounded-lg shadow-xl z-50 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
            Вы уверены, что хотите удалить:{' '}
            <span className="text-red-600">{brand.name}</span> ?
          </h2>

          <div className="flex justify-center space-x-4">
            <button
              className="px-6 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              onClick={() =>
                brand.id && mutate(brand.id, { onSuccess: handleOnSuccess })
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
        </div>
      </Modal>
      <CustomSnackbar
        isOpen={snackbarOpen}
        severity={getSnackbarSeverity({
          isError,
          isSuccess,
          isPending,
        })}
        message={getDeleteCarBrandSnackbarMessage({
          isError,
          isSuccess,
          isPending,
        })}
      />
    </>
  );
};
