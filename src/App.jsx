import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  const callApi = async (requestParams) => {
    try {
      setLoading(true); // Set loading to true before making the API call

      const response = await axios(requestParams); // Make the API call using Axios

      setData(response.data); // Update data with the response data
      setRequestParams(requestParams);
    } catch (error) {
      console.error('Error fetching data:', error);
      setData(null); // Clear data in case of an error
    } finally {
      setLoading(false); // Set loading to false after the API call, regardless of success or failure
    }
  };

  return (
    <>
      <Header />
      <div className="app-container">Request Method: {requestParams.method}</div>
     
      <Form handleApiCall={callApi} setLoading={setLoading} />
      <Results data={data} loading={loading} />
    
      <Footer />
    </>
  );
}

export default App;

