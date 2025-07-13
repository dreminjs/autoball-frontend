import Image from 'next/image';
import { PhonesMenu } from './phones/phones-menu';
import { useState } from 'react';

export const PhoneButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <button onClick={handleClick} className="md:hidden">
        <Image width={25} height={25} src={'/phone-icon.svg'} alt={'телефон'} />
      </button>
      <PhonesMenu
        isOpen={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
      />
    </>
  );
};
