import { Container } from '@/components/container';
import { AdvantagesList } from './advantages/advantages-list';
import { BurgerButton } from './burger-button';
import { Logo } from './logo';
import { PhoneButton } from './phone-button';
import { PhonesList } from './phones/phones-list';

export const Info = () => {
  return (
    <Container>
      <div className="flex items-center justify-between w-full p-5">
        <>
          <BurgerButton />
          <Logo height={70} width={70} className="block md:hidden" />
          <PhoneButton />
        </>

        <>
          <Logo height={115} width={115} className="hidden md:block" />
          <AdvantagesList />
          <PhonesList />
        </>
      </div>
    </Container>
  );
};
