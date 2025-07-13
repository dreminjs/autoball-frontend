import { AdvantagesList } from './advantages/advantages-list';
import { BurgerButton } from './burger-button';
import { Logo } from './logo';
import { PhoneButton } from './phone-button';
import { PhonesList } from './phones/phones-list';

export const Info = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <>
        <BurgerButton />
        <Logo height={50} width={50} className="block md:hidden" />
        <PhoneButton />
      </>

      <>
        <Logo height={115} width={115} className="hidden md:block" />
        <AdvantagesList />
        <PhonesList />
      </>
    </div>
  );
};
