import { IWheelComponentBrand } from '@autoball-frontend/shared-types';
import { FC } from 'react';
import { CustomSnackbar } from '../../../../../components';
import { useSnackbarVisible } from '../../../../../shared/hooks/use-snackbar-visible';
import { getSnackbarSeverity } from '../../../../../shared/lib/get-snackbar-severity';
import { useDeleteWheelBrand } from '../../../api/queries';
import { getSnackbarMessage, ModalLayout } from '../../../../../shared';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  brand: Partial<IWheelComponentBrand>;
};

export const DeleteBrandModal: FC<Props> = ({ isOpen, onClose, brand }) => {
  const { mutate, isError, isPending, isSuccess, error, reset } =
    useDeleteWheelBrand();

  const { snackbarOpen, onHideSnackbar } = useSnackbarVisible({
    state: isError || isPending || isSuccess,
  });

  const handleOnSuccess = () => {
    setTimeout(() => {
      reset();
      onClose();
      onHideSnackbar();
    }, 1500);
  };

  return (
    <>
      <ModalLayout isOpen={isOpen} onClose={onClose}>
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
          {
            error: error?.message || 'Erorr!',
          }
        )}
      />
    </>
  );
};
