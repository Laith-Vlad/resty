import React, { useState } from 'react';

import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false); // Add loading state

  const callApi = (requestParams) => {
    // mock output


    

    const newData = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };



    setData(newData);
    setRequestParams(requestParams);
    setLoading(false); // Set loading to false after API call
  };

  return (
    <>
      <Header />
      <div className="app-container">Request Method: {requestParams.method}</div>
     
      <Form handleApiCall={callApi} setLoading={setLoading} /> {/* Pass setLoading */}
      <Results data={data} loading={loading} /> {/* Pass loading state */}
    
      <Footer />
    </>
  );
}

export default App;
