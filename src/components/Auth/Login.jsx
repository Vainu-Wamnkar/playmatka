import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    mobileNumber: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    mobileNumber: '',
    password: '',
  });

  const [loginError, setLoginError] = useState('');
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setLoginError('');
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { mobileNumber: '', password: '' };

    if (!formData.mobileNumber.match(/^\d{10}$/)) {
      newErrors.mobileNumber = 'Enter valid 10-digit mobile number';
      isValid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const storedData = localStorage.getItem('userData');

      if (!storedData) {
        setLoginError('User not registered!');
        return;
      }

      const parsedData = JSON.parse(storedData);

      if (
        parsedData.mobileNumber === formData.mobileNumber &&
        parsedData.password === formData.password
      ) {
        alert('Login Successful!');
        setLoginError('');
        // redirect or navigate here
        navigate("/home")

      } else {
        setLoginError('Invalid credentials!');
      }
    }
  };

  return (
    <div className="min-h-screen bg-orange-200 pt-20 px-4">
      <div className="max-w-md mx-auto p-6 rounded-lg bg-white shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Enter 10-digit mobile number"
              className="mt-1 w-full px-3 py-2 border-2 border-black rounded-md focus:outline-none bg-transparent"
            />
            {errors.mobileNumber && (
              <p className="text-sm text-red-600 mt-1">{errors.mobileNumber}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="mt-1 w-full px-3 py-2 border-2 bg-transparent border-black rounded-md focus:outline-none"
            />
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">{errors.password}</p>
            )}
          </div>

          {loginError && (
            <p className="text-center text-red-600 text-sm font-medium">{loginError}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-[#D2691E] hover:bg-orange-300 transition text-white font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
