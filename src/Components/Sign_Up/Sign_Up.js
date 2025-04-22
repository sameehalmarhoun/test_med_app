// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';
import axios from 'axios';
import './Sign_Up.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

// Function component for Sign Up form
const Sign_Up = () => {
    // State variables using useState hook
    const [formData, setFormData] = useState({ username: '', email: '',phone: '', password: '' });
    const [message, setMessage] = useState('');
    const [formErrors,setFormErrors] = useState({});
    const [isSubmit , setIsSubmit] = useState(false);
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState(''); // State to show error messages
    const navigate = useNavigate(); // Navigation hook from react-router

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
      };
    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setFormErrors(validate(formData));
        setIsSubmit(true);
        try {
            // const response = await axios.post(`${API_URL}/api/auth/register`, formData);
            const response = await axios.post('http://localhost:3000/Sign_Up', formData);
            setMessage(response.data.message);
          } catch (error) {
            setMessage(error.response?.data?.message || 'Something went wrong');
          }

        // // API Call to register user
        // const response = await fetch(`${API_URL}/api/auth/register`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         name: name,
        //         email: email,
        //         password: password,
        //         phone: phone,
        //     }),
        // });

        // const json = await response.json(); // Parse the response JSON

        // if (json.authtoken) {
        //     // Store user data in session storage
        //     sessionStorage.setItem("auth-token", json.authtoken);
        //     sessionStorage.setItem("name", name);
        //     sessionStorage.setItem("phone", phone);
        //     sessionStorage.setItem("email", email);

        //     // Redirect user to home page
        //     navigate("/");
        //     window.location.reload(); // Refresh the page
        // } else {
        //     if (json.errors) {
        //         for (const error of json.errors) {
        //             setShowerr(error.msg); // Show error messages
        //         }
        //     } else {
        //         setShowerr(json.error);
        //     }
        // }
    };

    const validate = (values) => {
        const errors ={};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username){
            errors.username = "name is required!";
        }
        if (!values.email){
            errors.email = "Email is required!";
        }else if (!regex.test(values.email)){
            errors.email = "This is not a valid email format";
        }
        if (!values.phone){
            errors.phone = "Phone is required!";
        }else if (values.phone.length !== 10){
            errors.password = "Phone number must be 10 digits";
        }
        if (!values.password){
            errors.password = "Password is required!";
        }else if (values.password.length < 4){
            errors.password = "Password must be more than 4 characters";
        }
            return errors;
    };

    // JSX to render the Sign Up form
    return (
        <div className="container" style={{marginTop:'5%'}}>
            <div className="signup-grid">
                <div className="signup-form">
                    <form method="POST" onSubmit={register}>
                        <div className="form-group">
                           <label htmlFor="name">Name</label>
                           <input type="text" onChange={handleChange} name="name" id="name" className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                       </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input onChange={handleChange} type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                        </div>
                        <div className="form-group">
                           <label htmlFor="phone">Phone</label>
                           <input onChange={handleChange} type="tel" name="phone" id="phone" className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />
                       </div>
                       <div className="form-group">
                           <label htmlFor="password">Password</label>
                           <input onChange={handleChange} name="password" id="password" className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                       </div>
                       <div className="btn-group"> {/* Button group for form submission and reset */}
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button> {/* Submit button */}
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button> {/* Reset button */}
                        </div>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </div>
        </div>
        );
}

export default Sign_Up; // Export the Sign_Up component for use in other components
