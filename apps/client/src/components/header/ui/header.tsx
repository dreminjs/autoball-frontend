import { Info } from './info/info';
import { NavigationList } from './navigation/navigation-list';

export const Header = () => {
  return (
    <header className='mb-5'>
      <Info />
      <NavigationList navClassName='hidden md:block'/>
    </header>
  );
};
