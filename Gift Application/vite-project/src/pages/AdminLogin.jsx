import  { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {MDBContainer, MDBCol, MDBRow, MDBBtn,  MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import giftimg from "../images/gifts.png";
import axios from 'axios';
function AdminLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  // const username = "demo";
  localStorage.setItem('AdminEmail',email);

  const validateEmail = (email) => {

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    return pattern.test(email);
  }

  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const fetchUsername = async () => {
    try {
      const response = await axios.get(`http://localhost:8181/api/get/username/${email}`,{
        headers:{
          Authorization:`Bearer ${token}`,
        },
      }
      )
      // Replace '16' with the user_id of the logged-in user
      // console.log(email);
      localStorage.setItem('AdminName',response.data);
      console.log("Your name is");
      console.log(response.data);
      // console.log(token);
    } catch (error) {
      console.error(error);
    }
  };

  // localStorage.setItem('username',us);
  const handleFormSubmit = async(e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    try{
        console.log(password);
      const responce=await axios.post("http://localhost:8181/api/v1/auth/login",{email,password});
      navigate('/dashboard');
      let token=responce.data.token;
      console.log(responce);
      let user=responce.data.userResponce;
      // dispatch(login(
      //   {name: user.data.name}
      // ))
      localStorage.setItem('AdminToken',token);
      localStorage.setItem('user',JSON.stringify(user));
      fetchUsername();
    }
    catch(error){
      console.error("Error: " ,error);
      alert("Password is Incorrect");
    }
    setEmailError('');
  }


  return (
    <MDBContainer fluid style={{width:'70%'}} className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src={giftimg} className="img-fluid" alt="Sample image" />
        </MDBCol>

        <form >
        <MDBCol col='4' md='6'>

          <div className="d-flex flex-row align-items-center justify-content-center">

            <h3 className="">ADMIN SIGN IN</h3>

           
          </div>
           <br />

          <MDBInput wrapperClass='mb-4' label='Email' name='email' id='email' type='email' size="lg"  onChange={(e) => setEmail(e.target.value)}/>
          {emailError && <p className="error-message">{emailError}</p>}
          <MDBInput wrapperClass='mb-4' label='Password' name='password' id='password' type='password' size="lg"  onChange={(e) => setPassword(e.target.value)}/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <Link to="/dashboard"> <MDBBtn className="mb-0 px-5" size='lg' style={{backgroundColor:'blue'}} onClick={handleFormSubmit}>Login</MDBBtn></Link>
           
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link to="/signup">Register</Link></p>
          </div>

        </MDBCol>
        </form>

      </MDBRow>

    
        

    </MDBContainer>
  );
}

export default AdminLogin;