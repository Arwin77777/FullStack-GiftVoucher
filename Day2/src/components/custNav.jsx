import { Navbar, Nav } from 'rsuite';
// import HomeIcon from '@rsuite/icons/legacy/Home';
// import CogIcon from '@rsuite/icons/legacy/Cog';
import 'rsuite/dist/rsuite-no-reset.min.css';
import Profile from './avatar';
import Rnav from './rightD';
import { Link } from 'react-router-dom';
const CustNav = () => (
  <Navbar>
    <Navbar.Brand href="#"><Link to={`/`}><img src='https://giftcart.com/cdn/shop/files/GC-logo-web-2_180x.png' className='logo'/></Link></Navbar.Brand>
    <div className='nav-text'>
      <Nav>
        <Nav.Item><Link to={`/Categories`}>Categories</Link></Nav.Item>
        <Nav.Item><Link to={`/Categories`}>Birthday Gifts</Link></Nav.Item>
        <Nav.Item><Link to={`/Categories`}>Anniversary Gifts</Link></Nav.Item>
        <Nav.Item><Link to={`/Categories`}>Personalised</Link></Nav.Item>
        <Nav.Item><Link to={`/Categories`}>Occasions</Link></Nav.Item>
        <Nav.Item><Link to={`/Categories`}>Recipients</Link></Nav.Item>
        <Nav.Item><Link to={`/first`}>Admin</Link></Nav.Item>
      </Nav>
    </div>
    
    <Nav pullRight>
      <Nav.Item icon={<Profile/>}> <Rnav/> </Nav.Item>
    </Nav>
  </Navbar>
);
export default CustNav;
