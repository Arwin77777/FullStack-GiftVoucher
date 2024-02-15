import React, { useEffect, useState } from "react";
import { useNavigate,Link } from 'react-router-dom';
import {MDBContainer, MDBCol, MDBRow, MDBBtn,  MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import giftimg from "../images/gifts.png";
import basestyle from '../css/Base.module.css';
import axios from "axios";
function Signup({setUserState}) {
    
    const navigate = useNavigate();

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [user, setUserDetails] = useState({
      username: "",
      email: "",
      password: "",
      cpassword: "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUserDetails({
          ...user,
          [name]: value,
        });
      };

    const validateForm = (values) => {
        const error = {};
        const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
          error.name = "First Name is required";
        }
        if (!values.email) {
          error.email = "Email is required";
        } else if (!regex.test(values.email)) {
          error.email = "This is not a valid email format!";
        }
        if (!values.password) {
          error.password = "Password is required";
        } else if (values.password.length < 4) {
          error.password = "Password must be more than 4 characters";
        }
        if(!values.cpassword)
        {
            error.cpassword = "Confirm Password is required";
        }
        else if(values.cpassword!=values.password)
        {
            error.password = "Password must be the same";
        }
        return error;
      };

      const signupHandler = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(user));
        setIsSubmit(true);
        if (!formErrors) {
          setIsSubmit(true);
        }
      };


      useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(user);
          axios.post("http://localhost:8181/api/v1/auth/register", user).then((res) => {
            console.log(res);
            // alert(res.data.user);
            // setUserState(res.data.user);
            navigate("/", { replace: true });
          });
        }
      }, [formErrors]);


  return (
    <MDBContainer fluid style={{width:'70%'}} className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src={giftimg} className="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <div className="d-flex flex-row align-items-center justify-content-center">

            <h3 className="">SIGN UP</h3>

           
          </div>
           <br />
           <form>
           <MDBInput wrapperClass='mb-4' label='Username' name='username' id='username' type='text' size="lg" onChange={changeHandler} value={user.username}/>
           <p className={basestyle.error}>{formErrors.name}</p>
          <MDBInput wrapperClass='mb-4' label='Email address' name='email' id='email' type='email' size="lg" onChange={changeHandler} value={user.email}/>
          <p className={basestyle.error}>{formErrors.email}</p>
          <MDBInput wrapperClass='mb-4' label='Password' name='password' id='password' type='password' size="lg" onChange={changeHandler} value={user.password}/>
          <p className={basestyle.error}>{formErrors.password}</p>
          <MDBInput wrapperClass='mb-4' label='Confirm Password' name='cpassword' id='cpassword' type='password' size="lg" onChange={changeHandler} value={user.cpassword}/>
          <p className={basestyle.error}>{formErrors.cpassword}</p>
          <div className='text-center text-md-start mt-4 pt-2'>
            <Link to="/home"> <MDBBtn className="mb-0 px-5" size='lg' style={{backgroundColor:'blue'}} onClick={signupHandler}>Register</MDBBtn></Link>
           
            <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <Link to="/">Login</Link></p>
          </div>
          </form>

        </MDBCol>

      </MDBRow>
    </MDBContainer>
  );
}

export default Signup;