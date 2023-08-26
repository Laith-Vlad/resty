import './results.scss';

function Results(props) {
  return (
    <section className="results-container">
      {props.loading ? ( // Check if loading is true
        "loading..." // Display loading message
      ) : (
        <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre> // Display data or nothing
      )}
    </section>
  );
}

export default Results;
