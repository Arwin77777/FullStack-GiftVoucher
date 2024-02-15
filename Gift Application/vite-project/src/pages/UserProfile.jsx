import React, { useEffect, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
export default function UserProfile() {
    const email = localStorage.getItem('userEmail');
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('username');


    
	const[orders,setOrders] = useState({
    username:"",
    password:"",
    email:""
  });

	React.useEffect(() => {
        fetchCartItems();
        
      }, []);
    
      const fetchCartItems = async () => {
        try {
          const response = await axios.get(`http://localhost:8181/api/get/user/${email}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          setOrders(response.data);
          console.log(response.data);
          // console.log(orders);
        } catch (error) {
          console.error(error);
        }
      };


  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
        
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography style={{color:'black'}} tag="h5">{name}</MDBTypography>
                  <MDBCardText style={{color:'blue'}} >Prime Customer</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Name</MDBTypography>
                        <MDBCardText className="text-muted">{name}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">9876543210</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{orders.email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">9876543210</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <Link to="/editUser">
                    <Button>Edit User</Button>
                    </Link>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}