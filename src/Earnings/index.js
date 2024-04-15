import React, { useState } from 'react';
import "./index.css";

function Earnings() {
  const [selectedType, setSelectedType] = useState('');
  const [rangeFollowers, handlerangeFollowers] = useState(0);
  const [rangeProducts, handlerangeProducts] = useState(0);
  const [monthlyEarning, setmonthlyEarning] = useState(0);
  const [yearlyEarning, setyearlyEarning] = useState(0);

  const handleSelectChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleFollowersChange = (event) => {
    handlerangeFollowers(parseInt(event.target.value));
  };

  const handleProductsChange = (event) => {
    handlerangeProducts(parseInt(event.target.value));
  };

  const formatFollowerCount = (count) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'k'; // Divide by 1000 and append 'k'
    }
    return count.toString(); // Return the original count as string if less than 1000
  };

  const formatEarnings = (earnings) => {
    if (earnings >= 1000) {
      return earnings.toLocaleString(); // Format earnings with commas for thousands
    }
    return earnings.toString(); // Return the original earnings as string if less than 1000
  };

  const submitHandler = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
  
    // Prepare data to be sent to the backend
    const formData = {
      rangeFollowers,
      rangeProducts
    };
  
    // Send the data to the backend
    fetch('http://localhost:3003/forminfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json()) // Parse response as JSON
    .then(data => {
      // Handle the data here
      const {monthlyEarnings,yearlyEarnings} = data
      setmonthlyEarning(monthlyEarnings)
      setyearlyEarning(yearlyEarnings)
      // Set the state with the earnings data if needed
    })
    .catch(error => {
      // Handle errors
      console.log('Error:', error);
    });
  };
  

  return (
    <div className="earning-container">
      <h1 className="estimate-head">ESTIMATE EARNING POTENTIAL</h1>
      <div className="earning-form">
      <form onSubmit={submitHandler} className="earning-content">
        <div>
        <label htmlFor="influencerType" className="earning-para">What kind of influencer are you?</label>
        <div>
        <select id="influencerType" value={selectedType} onChange={handleSelectChange} className="input-select">
        <option value="" disabled hidden>Select influencer type?</option>
        <option value="Fashion">Fashion</option>
        <option value="Beauty">Beauty</option>
        <option value="Fitness">Fitness</option>
        <option value="Lifestyle">Lifestyle</option>
        {/* Add more options as needed */}
      </select>
        </div>
        </div>
        <div>
        <label htmlFor="followers" className="earning-para">How many followers do you have?</label>
        <div>
        <input
        type="range"
        id="followers"
        value={rangeFollowers}
        min={0}
        max={1000000}
        onChange={handleFollowersChange}
        className="input-range"
      />
        </div>
        </div>
        <div className="range-value">
        <p className="para-range">{formatFollowerCount(rangeFollowers)}</p>
        </div>
        <div>
        <label htmlFor="products" className="earning-para">How many products dou you list monthly?</label>
        <div>
        <input
        type="range"
        id="products"
        value={rangeProducts}
        min={0}
        max={10000}
        onChange={handleProductsChange}
        className="input-range"
      />
        </div>
        </div>
        <div className="range-value">
        <p className="para-range">{rangeProducts}</p>
        </div>
      <button type="submit" className="calculate-button">Calculate</button>
    </form>
    <div>
      <div>
      <h1 className="earnings-headings">Monthly Earnings</h1>
      <h1 className="earning-values">{formatEarnings(monthlyEarning)}</h1>
      </div>
      <div>
      <h1 className="earnings-headings">Yearly Earnings</h1>
      <h1 className="earning-values">{formatEarnings(yearlyEarning)}</h1>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Earnings;
