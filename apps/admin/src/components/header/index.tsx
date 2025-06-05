import { Link } from 'react-router-dom';
import logo from '../../assets/autoball-logo.png';
import { Container } from '../container';
import { PAGE_URLS } from '../../shared/constants';

export const Header = () => {
  return (
    <header className="py-4 bg-[#78cdff]">
      <Container>
        <img src={logo} alt={'autoball logo'} width={100} height={100} />
      </Container>
      <ul>
        <li>
          <Link to={PAGE_URLS['car-brands']}></Link>
        </li>
      </ul>
    </header>
  );
};
