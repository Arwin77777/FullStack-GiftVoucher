import { Drawer, RadioGroup, Radio, ButtonToolbar, Button,  Placeholder } from 'rsuite';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const RadioLabel = ({ children }) => <label style={{ padding: 7 }}>{children}</label>;


const Rnav = () => {
  const [size, setSize] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState('right');

  const handleOpen = value => {
    setSize(value);
    setOpen(true);
  };
  RadioLabel.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  return (
    <>
      
      <ButtonToolbar>
        <Button size="xs" onClick={() => handleOpen('xs')}>
          Profile
        </Button>
      </ButtonToolbar>

      <hr />
      <Drawer size={size} placement={placement} open={open} onClose={() => setOpen(false)}>
        <Drawer.Header>
          <Drawer.Title>Drawer Title</Drawer.Title>
          <Drawer.Actions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Link to={`/profile`}><Button>Settings</Button></Link>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          <Placeholder.Paragraph rows={8} />
        </Drawer.Body>
      </Drawer>
    </>
  );
};
export default Rnav;
