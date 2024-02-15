import { Form, ButtonToolbar, Button, Input } from 'rsuite';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import { useState } from 'react';
import axios from 'axios';

function AddGifts()
{
    
    const[order, setOrder] = useState({
        giftName: "",
        giftImageUrl: "",
        giftDetails: "",
        giftPrice: "",
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
          const response = await axios.post('http://localhost:8181/api/admin/gift', order, {
            headers: {
              Authorization: `Bearer ${tok}`
            }
          });
          console.log("Response:", response);
          alert("Gift added Successfully....");
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
                        <h4 style={{color:'blue'}}>Add Gifts</h4>
  <Form onSubmit={(e) => handleSubmit(e)}>
    <Form.Group controlId="giftName">
      <Form.ControlLabel>Gift Name</Form.ControlLabel>
      <input name="giftName" type='text'  value={order.giftName} onChange={changeHandler}/>
 
    </Form.Group>
    <Form.Group controlId="giftImageUrl">
      <Form.ControlLabel>Image Url</Form.ControlLabel>
      <input name="giftImageUrl" type="text" onChange={changeHandler} value={order.giftImageUrl} />
     
    </Form.Group>
    <Form.Group controlId="giftDetails">
      <Form.ControlLabel>Gift Details</Form.ControlLabel>
      <input name="giftDetails" type="text"  onChange={changeHandler} value={order.giftDetails}/>
    </Form.Group>
    <Form.Group controlId="giftPrice">
      <Form.ControlLabel>Gift Price</Form.ControlLabel>
      <input name="giftPrice" type="text" onChange={changeHandler} value={order.giftPrice}/>
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
