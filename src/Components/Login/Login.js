// Following code has been commented with appropriate comments for your reference.
import React, { useState, useEffect } from 'react';
// Apply CSS according to your design theme or the CSS provided in week 2 lab 2
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Login = () => {

  // State variables for email and password
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState('');
const initialValues = { email: "", password: "" };
const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);
  // Get navigation function from react-router-dom
  const navigate = useNavigate();

  // Check if user is already authenticated, then redirect to home page
  // useEffect(() => {
  //   if (sessionStorage.getItem("auth-token")) {
  //     navigate("/");
  //   }
  // }, []);
  useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            alert("signing in successfully");
            navigate("/");
        }
    },[formErrors]);

  
  // Function to handle login form submission
  const login = (e) => {
    e.preventDefault(); // Prevent default form submission
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

  const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
        
    };

  const validate = (values) => {
        const errors ={};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
        if (!values.email){
            errors.email = "Email is required!";
        }else if (!regex.test(values.email)){
            errors.email = "This is not a valid email format";
        }
        
        if (!values.password){
            errors.password = "Password is required!";
        }else if (values.password.length < 4){
            errors.password = "Password must be more than 4 characters";
        }
            return errors;
    };

  return (
    <div>
      <div className="container">
        <div className="login-grid">
          <div className="login-text">
            <h2>Login</h2>
          </div>
          <div className="login-text">
            Are you a new member? 
            <Link to="/signup" style={{ color: '#2190FF' }}>
                Sign Up Here
            </Link>
            <span>
              
              
            </span>
          </div>
          <br />
          <div className="login-form">
            <form onSubmit={login}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                {/* Input field for email */}
                <input 
                  value={formValues.email} 
                  onChange={handleChange} 
                  type="email" 
                  name="email" 
                  id="email" 
                  className="form-control" 
                  placeholder="Enter your email" 
                  aria-describedby="helpId" 
                />
              </div>
              {/* Input field for password */}
              <div className="form-group">
               <label htmlFor="password">Password</label>
               <input
                 value={formValues.password}
                 onChange={handleChange}
                 type="password"
                 name="password"
                 id="password"
                 className="form-control"
                 placeholder="Enter your password"
                 aria-describedby="helpId"
               />
             </div>
              
              <div className="btn-group">
                {/* Login button */}
                <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">
                  Login
                </button>
                <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
