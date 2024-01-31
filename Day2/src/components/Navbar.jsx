import { Navbar, Nav } from 'rsuite';
// import HomeIcon from '@rsuite/icons/legacy/Home';
// import CogIcon from '@rsuite/icons/legacy/Cog';
import Profile from './Avatar';
import Searchbar from '../Searchbar';

const ProfileBar = () => (
  <Navbar>
    <Nav>
      <Nav.Item ><Searchbar></Searchbar></Nav.Item>
     
    </Nav>
    <Nav pullRight>
      <Nav.Item icon={<Profile />}>Dakota</Nav.Item>
    </Nav>
  </Navbar>
);


export default ProfileBar