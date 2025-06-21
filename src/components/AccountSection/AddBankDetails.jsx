import React, { useState } from 'react';

const AddBankDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    accountNumber: '',
    ifscCode: '',
    bankName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    // Yahan aap API call ya save ka logic likh sakte ho
  };

  return (
    <div className="w-full min-h-screen flex justify-center pt-20 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <h2 className="text-2xl text-green-700 font-bold mb-4 text-center">Add Bank Account</h2>

        {/* 👤 Name Field */}
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* 🏦 Account Number */}
        <div className="mb-4">
          <label className="block mb-1">Account Number</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* 🔤 IFSC Code */}
        <div className="mb-4">
          <label className="block mb-1">IFSC Code</label>
          <input
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleChange}
            className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* 🏛 Bank Name */}
        <div className="mb-6">
          <label className="block mb-1">Bank Name</label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBankDetails;
