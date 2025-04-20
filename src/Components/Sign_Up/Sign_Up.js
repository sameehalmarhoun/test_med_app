// Following code has been commented with appropriate comments for your reference.
import React, { useState, useEffect } from 'react';
import './Sign_Up.css'
import { Link, useNavigate } from 'react-router-dom';
// import { API_URL } from '../../config';

// Function component for Sign Up form
const Sign_Up = () => {
    // State variables using useState hook
    const initaialValues = {name:"", email:"", phone:"", password:"", };
    const [formValues,setFormValues]= useState(initaialValues);
    const [formErrors,setFormErrors] = useState({});
    const [isSubmit , setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
        
    };
    
    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            }
    },[formErrors]);

    const validate = (values) => {
        const errors ={};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username){
            errors.username = "Username is required!";
        }
        if (!values.email){
            errors.email = "Email is required!";
        }else if (!regex.test(values.email)){
            errors.email = "This is not a valid email format";
        }
        if (!values.phone){
            errors.phone = "Phone is required!";
        }else if (values.phone.length != 10){
            errors.password = "Phone number must be 10 digits";
        if (!values.password){
            errors.password = "Password is required!";
        }else if (values.password.length < 4){
            errors.password = "Password must be more than 4 characters";
        }
            return errors;
    };
    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
    

        
   

    // JSX to render the Sign Up form
    return (
        <div className="container" style={{marginTop:'5%'}}>
            {Object.keys(formErrors).length === 0 && isSubmit ? (<div classname="ui message success">Signed Up Successfully</div>
        ):(
            <pre>{JSON.stringify(formValues,undefined,2)}</pre>
        )}
            <div className="signup-grid">
                <div className="signup-text"> {/* Title for the sign-up form */}
                    <h1>Sign Up</h1>
                </div>
                <div className="signup-text1" style={{textAlign: 'left'}}> {/* Text for existing members to log in */}
                    Already a member? <span><a href="../Login/Login.html" style={{color: '#2190FF'}}> Login</a></span>
                </div>
                <div className="signup-form">
                    
                    <form method="POST" onSubmit={register}>
                    <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input value={formValues.username} type="text" onChange={handleChange} name="name" id="name" className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                        </div>
                        <p>{formErrors.username}</p>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input value={formValues.phone} onChange={handleChange} type="tel" name="phone" id="phone" className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
                        </div>
                        <p>{formErrors.phone}</p>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input value={formValues.email} onChange={handleChange} type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                           
                        </div>
                        <p>{formErrors.email}</p>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input value={formValues.password} type= "password" onChange={handleChange} name="password" id="password" className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                        </div>
                        <p>{formErrors.password}</p>
                        <div className="btn-group"> {/* Button group for form submission and reset */}
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button> {/* Submit button */}
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button> {/* Reset button */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
        //{/* Note: Sign up role is not stored in the database. Additional logic can be implemented for this based on your React code. */}
    );
}
}

export default Sign_Up; // Export the Sign_Up component for use in other components
