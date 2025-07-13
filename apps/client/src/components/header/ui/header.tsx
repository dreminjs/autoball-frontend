import { Container } from '@/components/container';
import { Info } from './info/info';

export const Header = () => {
  return (
    <header className='p-5'>
      <Container className='flex items-center'>
        <Info />
      </Container>
    </header>
  );
};
