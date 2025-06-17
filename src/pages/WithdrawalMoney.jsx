import React, { useState } from 'react';

const WithdrawMoney = () => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const numericAmount = parseFloat(amount);

    if (!amount || isNaN(numericAmount) || numericAmount <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    if (numericAmount < 100) {
      setError("Amount should be greater than 100.");
      return;
    }

    // Clear error and proceed
    setError('');

    console.log("Withdraw Request Submitted: ₹", numericAmount);
    alert(`Withdrawal request for ₹${numericAmount} submitted.`);

    setAmount('');
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setAmount(value);

    // Clear error as soon as user starts editing the field
    if (error) {
      setError('');
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 pt-32 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg ">
        <h2 className="text-2xl font-bold text-center mb-6 text-orange-700">Withdraw Money</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block  font-medium mb-2">Enter Withdrawal Amount</label>
            <input
              type="number"
              value={amount}
              onChange={handleChange}
              placeholder="₹ Enter amount"
              className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none"
              required
            />
            {error && (
              <p className="text-sm text-red-600 mt-1">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default WithdrawMoney;
