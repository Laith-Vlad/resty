import { useState } from 'react';
import './Form.scss';

function Form(props) {
  const [method, setMethod] = useState('GET'); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: e.target.url.value,
      obj: e.target.textArea.value,
    };
    props.setLoading({type:"LOADING",payload:true}); 
    await props.handleApiCall(formData); // Await the API call
    // props.setLoading(false); // Set loading to false after the API call
    props.setLoading({type:"LOADING",payload:false}); 
  }

  const handleMethodChange = (e) => {
    setMethod(e.target.value); // Update the selected method state
  }

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <label>
        <span>URL: </span>
        <input id="Url" name='url' type='text' />
        <button type="submit">GO!</button>
      </label>
      <textarea name="textArea" defaultValue=""></textarea>

      <label className="methods">
        <input
          data-testid='GET'
          type="radio"
          name="method"
          value="GET"
          checked={method === 'GET'}
          onChange={handleMethodChange}
        />
        GET
        <input
          type="radio"
          name="method"
          value="POST"
          checked={method === 'POST'}
          onChange={handleMethodChange}
        />
        POST
        <input
          type="radio"
          name="method"
          value="PUT"
          checked={method === 'PUT'}
          onChange={handleMethodChange}
        />
        PUT
        <input
          type="radio"
          name="method"
          value="DELETE"
          checked={method === 'DELETE'}
          onChange={handleMethodChange}
        />
        DELETE
      </label>
    </form>
    </div>
  );
}

export default Form;
