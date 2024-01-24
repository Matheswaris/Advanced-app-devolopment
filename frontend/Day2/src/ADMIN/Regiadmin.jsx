import './Regiadmin.css'; 
import React, { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phoneNo: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validatePhoneNumber = (phoneNo) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNo);
    };

    const validateEmail = (email) => {
        // A basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        // Check for a strong password (8 characters, at least one uppercase, one lowercase, one digit, and one special character)
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate phone number
        if (!validatePhoneNumber(formData.phoneNo)) {
            setErrors({ ...errors, phoneNo: 'Invalid phone number' });
            return;
        }

        // Validate email
        if (!validateEmail(formData.email)) {
            setErrors({ ...errors, email: 'Invalid email address' });
            return;
        }

        // Validate password
        if (!validatePassword(formData.password)) {
            setErrors({ ...errors, password: 'Password must be strong' });
            return;
        }

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            setErrors({ ...errors, confirmPassword: 'Passwords do not match' });
            return;
        }

        // Perform registration logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="registration-form-container">
            <h2>ADMIN REGISTRATION</h2>
            <form onSubmit={handleSubmit} className="registration-form">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {errors.email && <p className="error-message">{errors.email}</p>}

                <label htmlFor="phoneNo">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNo"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleChange}
                    required
                />
                {errors.phoneNo && <p className="error-message">{errors.phoneNo}</p>}

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                {errors.password && <p className="error-message">{errors.password}</p>}

                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
                {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
