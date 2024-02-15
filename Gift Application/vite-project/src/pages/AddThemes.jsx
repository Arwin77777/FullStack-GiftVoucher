import { Form, ButtonToolbar, Button, Input } from 'rsuite';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import { useState } from 'react';
import axios from 'axios';

function AddGifts()
{
    
    const[theme, setTheme] = useState({
        themeName: "",
        themeDetails: "",
        themePrice: "",
      });
    

      const changeHandler = (e) => {
        const { name, value } = e.target;
        setTheme ({
          ...theme,
          [name]: value,
        });
      };

      const tok = localStorage.getItem('token');
       const handleSubmit = async (e) => {
        console.log(theme);
        // e.preventDefault();
        try {
          console.log(tok);
          
          console.log(theme);
          const response = await axios.post('http://localhost:8181/api/admin/theme', theme, {
            headers: {
              Authorization: `Bearer ${tok}`
            }
          });
          console.log("Response:", response);
          alert("Theme added Successfully....");
        } catch (error) {
          console.error("Error:", error);
        }
      }
    
      return (
    <div className='d-flex profile'>
        <div>
            <Sidebar></Sidebar>
        </div>
        <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh",}}>
            <Navbar></Navbar>

            <div style={{height:"100%" }}>
					<div style={{height:"calc(100% )", padding:"20px 2%", overflowY:"scroll"}}>
						<div style={{margin:"0 auto", maxWidth:"1320px"}}></div>
                        <h4 style={{color:'blue'}}>Add Themes</h4>
  <Form onSubmit={(e) => handleSubmit(e)}>
    <Form.Group controlId="themeName">
      <Form.ControlLabel>Theme Name</Form.ControlLabel>
      <input name="themeName" type='text'  value={theme.themeName} onChange={changeHandler}/>
 
    </Form.Group>
   
    <Form.Group controlId="themeDetails">
      <Form.ControlLabel>Theme Details</Form.ControlLabel>
      <input name="themeDetails" type="text"  onChange={changeHandler} value={theme.themeDetails}/>
    </Form.Group>
    <Form.Group controlId="themePrice">
      <Form.ControlLabel>Theme Price</Form.ControlLabel>
      <input name="themePrice" type="text" onChange={changeHandler} value={theme.themePrice}/>
    </Form.Group>
    <Form.Group>
      <ButtonToolbar>
        <Button appearance="primary" type='submit'>Submit</Button>
        <Button appearance="default">Cancel</Button>
      </ButtonToolbar>
    </Form.Group>
  </Form>
  </div>
  </div>
  </div>
  </div>
//   </div>

      );
    }

export default AddGifts
