import { PostOrderModal } from '@/modules/order/ui/post-order/post-order-modal';
import { CartControls } from './cart-controls';
import { CartList } from './cart-list';
import { useState } from 'react';

export const CartPage = () => {
  const [isPostOrderModalVisible, setIsPostOrderModalVisible] = useState(false);

  return (
    <>
      <div>
        <CartControls onOpen={() => setIsPostOrderModalVisible(true) } />
        <CartList />
      </div>
      <PostOrderModal
        isOpen={isPostOrderModalVisible}
        onClose={() => setIsPostOrderModalVisible(false)}
      />
    </>
  );
};
