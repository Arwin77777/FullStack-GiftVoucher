import { Form, ButtonToolbar, Button, Input } from 'rsuite';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import { useState } from 'react';
import axios from 'axios';

function EditUser()
{
    
    const[order, setOrder] = useState({
       username:"",
       email:"",
       password:""
      });
    

      const changeHandler = (e) => {
        const { name, value } = e.target;
        setOrder ({
          ...order,
          [name]: value,
        });
      };

      const tok = localStorage.getItem('token');
       const handleSubmit = async (e) => {
        console.log(order);
        // e.preventDefault();
        try {
          console.log(tok);
          
          console.log(order);
          const response = await axios.put('http://localhost:8181/api/editUser', order, {
            headers: {
              Authorization: `Bearer ${tok}`
            }
          });
          console.log("Response:", response);
          alert("User Edited Successfully....");
        } catch (error) {
          console.error("Error:", error);
        }
      }
    
      return (
    <div style={{marginLeft:"40%",marginTop:"10%"}} className='d-flex profile'>
        <div>
            {/* <Sidebar></Sidebar> */}
        </div>
        <div style={{}}>
            {/* <Navbar></Navbar> */}

            <div style={{height:"100%" }}>
					<div style={{padding:"20px 2%"}}>
						<div style={{margin:"0 auto", maxWidth:"600px"}}></div>
                        <h4 style={{color:'blue'}}>Edit User</h4>
  <Form onSubmit={(e) => handleSubmit(e)}>
    <Form.Group controlId="username">
      <Form.ControlLabel>Username</Form.ControlLabel>
      <input name="username" type='text'  value={order.username} onChange={changeHandler}/>
 
    </Form.Group>
    <Form.Group controlId="email">
      <Form.ControlLabel>Email</Form.ControlLabel>
      <input name="email" type="text" onChange={changeHandler} value={order.email} />
     
    </Form.Group>
    <Form.Group controlId="password">
      <Form.ControlLabel>Password</Form.ControlLabel>
      <input name="password" type="text"  onChange={changeHandler} value={order.password}/>
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

export default EditUser
