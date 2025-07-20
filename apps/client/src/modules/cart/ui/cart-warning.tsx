import { isCartWarningOpenAtom } from '@/modules/products/model/product-atoms-page';
import { PAGE_URLS, QUERY_KEYS, SERVICE_URLS } from '@/shared/constants';
import Modal from '@mui/material/Modal';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { FaExclamationTriangle, FaSignInAlt, FaTimes } from 'react-icons/fa';

export const CartWarning = () => {
  const [isCartWarningOpen, setIsCartWarningOpen] = useAtom(
    isCartWarningOpenAtom
  );

  const handleClose = () => setIsCartWarningOpen(false);

  return (
    <Modal
      className="fixed inset-0 flex items-center justify-center"
      open={isCartWarningOpen}
      onClose={handleClose}
    >
      <div className="relative p-6 max-w-md w-full bg-white rounded-lg">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes size={20} />
        </button>

        <div className="flex justify-center mb-4">
          <FaExclamationTriangle className="text-yellow-500" size={48} />
        </div>

        <h3 className="text-xl font-bold text-center mb-3">
          Требуется авторизация
        </h3>
        <p className="text-gray-600 text-center mb-6">
          Чтобы добавить товары в корзину, пожалуйста, войдите в свой аккаунт
          или зарегистрируйтесь.
        </p>

        <div className="flex flex-col space-y-3">
          <Link
            onClick={handleClose}
            href={PAGE_URLS.signin}
            className="w-full flex gap-2 p-2 rounded-xl items-center bg-blue-600 hover:bg-blue-700 text-white"
          >
            <FaSignInAlt className="mr-2" />
            Войти в аккаунт
          </Link>

          <Link
            onClick={handleClose}
            href={PAGE_URLS.signup}
            className="w-full flex gap-2 p-2 rounded-xl items-center bg-blue-600 hover:bg-blue-700 text-white"
          >
            <FaSignInAlt className="mr-2" />
            Зарегистроваться
          </Link>
        </div>
      </div>
    </Modal>
  );
};
