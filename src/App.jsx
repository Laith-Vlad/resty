import  { useReducer } from 'react';
import axios from 'axios'; // Import Axios

import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import { initialState, reducer } from './reducer';
import History from './Components/history/History';
function App() {
  // const [data, setData] = useState(null);
  // const [requestParams, setRequestParams] = useState({});
  // const [loading, setLoading] = useState(false);
  const [data,dispatch] = useReducer(reducer,initialState)
  // const [historyRend,setHistoryrend] = useReducer()
  function handleHistoryRender (){
    dispatch({type:"RENDERHIS",payload:!data.renderH})
  }
  const callApi = async (requestParams) => {
    try {
      // setLoading(true); // Set loading to true before making the API call
      dispatch({type:"LOADING",payload:true})
      const response = await axios(requestParams); // Make the API call using Axios
     
       dispatch({type : "HISTORY" ,payload : {Results:response.data,Header:response.headers,config:requestParams}})
         console.log("respone:::::::" ,response)
      // setData(response.data); // Update data with the response data
      dispatch({type:"CHANGEDATA",payload:response.data})
      // setRequestParams(requestParams);
      dispatch({type:"CHANGEPARAM",payload:requestParams})


    } catch (error) {
      console.error('Error fetching data:', error);
      // setData(null); // Clear data in case of an error
      dispatch({type:"CHANGEDATA",payload:null})
    } finally {
      // setLoading(false); // Set loading to false after the API call, regardless of success or failure
      dispatch({type:"LOADING",payload:false})
    }
  };

  return (
    <>
      <Header />
      <div className="app-container">Request Method: {data&&data.requastParams.method}</div>
     
     
     
       <button onClick={handleHistoryRender} >
        get History
       </button>
        {data.renderH?<History renderHistory= {data.history}/>: 
       <>  <Results data={data.data} loading={data.loading} /> <Form handleApiCall={callApi} setLoading={dispatch} /> </> }
      <Footer />
    </>
  );
}

export default App;

