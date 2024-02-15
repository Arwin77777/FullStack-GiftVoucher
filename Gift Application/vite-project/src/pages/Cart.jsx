import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import axios from "axios";
import { Button } from "rsuite";

export default function Cart() {
    const[orders,setOrders] = useState([]);
    const token = localStorage.getItem('token');

    React.useEffect(() => {
        fetchCartItems();
        
      }, []);
    
      const fetchCartItems = async () => {
        try {
          const response = await axios.get('http://localhost:8181/api/get/orders', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          setOrders([...response.data]);
          console.log(orders);
        } catch (error) {
          console.error(error);
        }
      };

      const removeCartItem = async (id) => {
        try {
          await axios.delete(`http://localhost:8181/api/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          }
          )
          fetchCartItems();
        } catch (error) {
          console.error(error);
        }
      };
return (
    <div>
<section className="h-100" style={{ backgroundColor: "#eee" }}>
  <MDBContainer className="py-5 h-100">
    <MDBRow className="justify-content-center align-items-center h-100">
      <MDBCol md="10">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
            Shopping Cart
          </MDBTypography>
          <div>
            <p className="mb-0">
              <span className="text-muted">Sort by:</span>
              <a href="#!" className="text-body">
                price <i className="fas fa-angle-down mt-1"></i>
              </a>
            </p>
          </div>
        </div>
        {orders.map(order=>(
        <MDBCard key={order.orderId} className="rounded-3 mb-4">
          <MDBCardBody className="p-4">
            <MDBRow className="justify-content-between align-items-center">
              <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage className="rounded-3" fluid
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                  alt="Cotton T-shirt" />
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3">
                <p className="lead fw-normal mb-2">{order.gift.giftName}</p>
                <p>
                 {order.theme.themeName}
                </p>
              </MDBCol>
              <MDBCol md="3" lg="3" xl="2"
                className="d-flex align-items-center justify-content-around">
                <MDBBtn color="link" className="px-2">
                  <MDBIcon fas icon="minus" />
                </MDBBtn>

                <MDBInput min={0} defaultValue={order.quantity} type="number" style={{width:'70px'}} />

                <MDBBtn color="link" className="px-2">
                  <MDBIcon fas icon="plus" />
                </MDBBtn>
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                <MDBTypography tag="h5" className="mb-0">
                ₹{order.order_price}
                </MDBTypography>
              </MDBCol>
              <MDBCol md="1" lg="1" xl="1" className="text-end">
                <Button onClick={() => removeCartItem(order.orderId)} > <MDBIcon  fas icon="trash text-danger" size="lg" /></Button>
                 
               
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
        ))}
        <MDBCard className="mb-4">
          <MDBCardBody className="p-4 d-flex flex-row">
            <MDBInput label="Discound code" wrapperClass="flex-fill" size="lg" />
            <MDBBtn className="ms-3" color="warning" outline size="lg">
              Apply
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard>
          <MDBCardBody>
            <MDBBtn className="ms-3" color="warning" block size="lg">
              Apply
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>
</div>
);
}