import './results.scss';
import  { useState } from 'react';

function Results(props) {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  if (props.loading) {
    return (
      <section className="results-container">
        Loading...
      </section>
    );
  }

  if (!props.data) {
    return (
      <section className="results-container">
        No data available
      </section>
    );
  }
  console.log(props.data)
  const totalPages = Math.ceil(props.data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedResults = props.data.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="results-container">
      <pre>{JSON.stringify(displayedResults, undefined, 2)}</pre>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span>{currentPage}/{totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </section>
  );
}

export default Results;
