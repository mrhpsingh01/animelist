import React from "react";

function Pagination(props) {
  const firstPagesToShow = 5;
  const lastPagesToShow = 2;

  const handlePageChange = (pageNumber) => {
    props.setCurrentPage(pageNumber);
  };

  const getPagesToShow = () => {
    const pages = [];

    // First pages
    for (let i = 1; i <= firstPagesToShow; i++) {
      pages.push(i);
    }

    // Ellipsis
    if (
      props.currentPage > firstPagesToShow + 1 &&
      props.totalPages > firstPagesToShow + lastPagesToShow + 1
    ) {
      pages.push(-1);
    }

    // Middle pages
    const firstMiddlePage = Math.max(
      firstPagesToShow + 1,
      props.currentPage - Math.floor((firstPagesToShow + lastPagesToShow) / 2)
    );
    const lastMiddlePage = Math.min(
      props.totalPages - lastPagesToShow,
      firstMiddlePage + firstPagesToShow - 1
    );
    for (let i = firstMiddlePage; i <= lastMiddlePage; i++) {
      pages.push(i);
    }

    // Ellipsis
    if (
      props.currentPage < props.totalPages - lastPagesToShow &&
      props.totalPages > firstPagesToShow + lastPagesToShow + 1
    ) {
      pages.push(-1);
    }

    // Last pages
    for (
      let i = props.totalPages - lastPagesToShow + 1;
      i <= props.totalPages;
      i++
    ) {
      pages.push(i);
    }

    return pages;
  };
  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(1)}
        disabled={props.currentPage === 1}
      >
        &laquo;
      </button>
      {getPagesToShow().map((pageNumber) =>
        pageNumber === -1 ? (
          <span key="ellipsis"></span>
        ) : (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={props.currentPage === pageNumber ? "active" : ""}
          >
            {pageNumber}
          </button>
        )
      )}
      <button
        onClick={() => handlePageChange(props.totalPages)}
        disabled={props.currentPage === props.totalPages}
      >
        &raquo;
      </button>
    </div>
  );
}

export default Pagination;
