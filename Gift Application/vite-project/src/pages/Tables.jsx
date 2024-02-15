/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-key */

import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useState,useEffect } from "react";
export const Tables = () => {

  const [users,setUsers] = useState([]);
  const token = localStorage.getItem('token');

  const [orders,setOrders] = useState([]);

  // const token = localStorage.getItem('token');
	useEffect(() => {
		fetchOrders();
	  }, []);


	  const fetchOrders = async () => {
		try {
		  const response = await axios.get('http://localhost:8181/api/get/orders',{
			headers:{
			  Authorization:`Bearer ${token}`,
			},
		  }
		  )
		  // Replace '16' with the user_id of the logged-in user
		  setOrders([...response.data]);
		//   console.log(response.data);
		  console.log(orders);
		//   console.log(orders.[0].orderId);
		} catch (error) {
		  console.error(error);
		}
	  };
	


  useEffect(() => {
    fetchUserList();
  }, []);


  const fetchUserList = async () => {
    try {
      const response = await axios.get('http://localhost:8181/api/v1/user/userList',{
        headers:{
          Authorization:`Bearer ${token}`,
        },
      }
      )
      // Replace '16' with the user_id of the logged-in user
      setUsers([...response.data.data]);
      // console.log(response.data.data);
      console.log(users);
      // console.log(token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="d-flex">
      <div>
        <Sidebar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        <Navbar/>
        <div style={{height:"100%"}}>
          <div style={{padding:"20px 5%",height:"calc(100% - 64px)",overflowY:"scroll"}}>
            <div style={{display:"grid", gridTemplateColumns:"repeat(1, minmax(200px, 700px))"}}>
              <div className="mt-5 w-100">
                <h4 className="font-weight-bold mb-3">List of Users</h4>
                <CDBTable bordered responsive>
                  <CDBTableHeader>
                    <tr >
                      <th style={{color:'blue',fontSize:'20px',fontFamily:'initial'}}>Name</th>
                      <th style={{color:'blue',fontSize:'20px',fontFamily:'initial'}}>Email</th>
                      <th style={{color:'blue',fontSize:'20px',fontFamily:'initial'}}>Role</th>
                      
                    </tr>
                  </CDBTableHeader>
                {users.map(user=>(
                  <CDBTableBody key={user.id}>
                    <tr>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                    </tr>
                  </CDBTableBody>
                   ))} 
                </CDBTable>
              </div>
              <div className="mt-5">
                <h4 className="font-weight-bold mb-3">Orders</h4>
                {/* <h5>Dark Header</h5> */}
                <CDBTable bordered responsive>
                  <CDBTableHeader color="dark">
                    <tr>
                      <th style={{color:'blue',fontSize:'20px',fontFamily:'initial'}}>Order Email</th>
                      <th style={{color:'blue',fontSize:'20px',fontFamily:'initial'}}>Gift</th>
                      <th style={{color:'blue',fontSize:'20px',fontFamily:'initial'}}>Theme</th>
                      <th style={{color:'blue',fontSize:'20px',fontFamily:'initial'}}>Price</th>
                      <th style={{color:'blue',fontSize:'20px',fontFamily:'initial'}}>Quantity</th>
                    </tr>
                  </CDBTableHeader>
                  {orders.map(item=>(
                  <CDBTableBody>
                    <tr>
                      <td>{item.user.email}</td>
                      <td>{item.gift.giftName}</td>
                      <td>{item.theme.themeName}</td>
                      <td>{item.order_price}</td>
                      <td>{item.quantity}</td>
                    </tr>
                    </CDBTableBody>
                    ))}
                   </CDBTable>
               </div>
               
         
             
            <footer className="mx-auto my-3 text-center">
                <small>&copy; Refer your customer details</small>
            </footer>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
