import React from 'react';
import Input from './Input';
import loginCSS from './Login.module.css';



const Login = ({ signUpTab }) => {

 const loginBtn = (e) => {
  e.preventDefault();
  console.log(`Logged In...`);
 }

 return (
  <>

   <div id={loginCSS.loginContainer}>

    <form action="" onSubmit={loginBtn} method='POST'>
     <Input type={"text"} id={"FirstName"} placeholder={"Enter FirstName"} />
     <Input type={"text"} id={"LastName"} placeholder={"Enter LastName"} />
     <Input type={"email"} id={"Email"} placeholder={"Enter Email"} />
     <Input type={"password"} id={"Password"} placeholder={"Enter Password"} />
     <Input type={"file"} id={"Image"} placeholder={"Upload Image"} accept={"image/*"} />
     <button id={loginCSS.btn1} type="submit">LOGIN</button>
    </form>

    <div id={loginCSS.bottomDiv}>
     <h5>Don't have an account?</h5>
     <button id={loginCSS.btn2} onClick={signUpTab}>Register here</button>
    </div>

   </div>
  </>
 )
};

export default Login;
