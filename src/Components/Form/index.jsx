import { useState } from 'react';
import './Form.scss';

function Form(props) {
  const [method, setMethod] = useState('GET'); // State to track selected method

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      method: method, // Use the selected method state
      url: e.target.url.value,
      obj: e.target.textArea.value,
    };
    props.setLoading(true); // Set loading to true when submitting the form
    await props.handleApiCall(formData); // Await the API call
    props.setLoading(false); // Set loading to false after the API call
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
      <textarea name="textArea">   </textarea>

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
