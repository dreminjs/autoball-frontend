import { Info } from './info/info';
import { NavigationList } from './navigation/navigation-list';

export const Header = () => {
  return (
    <header>
      <Info />
      <NavigationList navClassName='hidden md:block'/>
    </header>
  );
};
