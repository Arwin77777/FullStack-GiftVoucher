import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';

const styles = {
  width: 300,
  marginBottom: 10
};

const Searchbar = () => (
  <>
    <InputGroup style={styles}>
      <Input />
      <InputGroup.Button>
        <SearchIcon />
      </InputGroup.Button>
    </InputGroup>

    
  </>
);

export default Searchbar