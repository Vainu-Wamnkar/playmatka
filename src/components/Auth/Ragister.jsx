import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'; // 🔥 import hot toast

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    password: '',
  });
  const navigate=useNavigate();

  const [errors, setErrors] = useState({
    name: '',
    mobileNumber: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', mobileNumber: '', password: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

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
      localStorage.setItem('userData', JSON.stringify(formData));
      
      // ✅ Clear the form
      setFormData({ name: '', mobileNumber: '', password: '' });

      // ✅ Show success toast
      navigate("/login");
      toast.success('Registration Successful!');
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-orange-200 px-4 flex justify-center items-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-base font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full mt-1 px-3 py-2 border rounded-md "
            />
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-base font-medium text-gray-700">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Enter 10-digit mobile number"
              className="w-full mt-1 px-3 py-2 border rounded-md "
            />
            {errors.mobileNumber && (
              <p className="text-sm text-red-600 mt-1">{errors.mobileNumber}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-base font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password (min 6 characters)"
              className="w-full mt-1 px-3 py-2 border rounded-md  "
            />
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">{errors.password}</p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Register
          </button>

          {/* Login Link */}
          <Link to="/login">
            <button
              type="button"
              className="w-full bg-gray-200 text-black py-2 rounded-md hover:bg-gray-300 transition mt-2"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
