import React, { useState } from 'react';


const AddMoney = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [utr, setUtr] = useState('');
  const [proofImage, setProofImage] = useState(null);

  const amounts = [
    100, 200, 500, 1000, 1500,
    2000, 3000, 4000, 5000,
    10000, 50000, 100000
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProofImage(file);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex justify-center px-4 pt-28 pb-10">
      <div className="w-full max-w-md bg-white  rounded-lg p-6">
        <h2 className="text-xl font-semibold text-center mb-4">Select Amount to Add</h2>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {amounts.map((amount) => (
            <button
              key={amount}
              onClick={() => setSelectedAmount(amount)}
              className={`py-2 px-4 rounded-lg text-white font-semibold ${
                selectedAmount === amount ? 'bg-green-600' : 'bg-blue-500'
              } hover:bg-blue-600 transition`}
            >
              ₹{amount}
            </button>
          ))}
        </div>

        {selectedAmount && (
          <>
            <img
              src="/qrimage.jpg"
              alt="QR Code"
              className="mx-auto w-60 h-60 object-contain mb-6 border p-2 rounded-lg"
            />

            <div className="mb-4">
              <label className="block text-base font-medium mb-1">Enter UTR Number</label>
              <input
                type="text"
                value={utr}
                onChange={(e) => setUtr(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter UTR number"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Upload Payment Proof</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full"
              />
              {proofImage && (
                <p className="text-sm text-green-600 mt-1">Image selected: {proofImage.name}</p>
              )}
            </div>

            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700">
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AddMoney;
