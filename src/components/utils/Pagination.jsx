const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-zinc-50 text-2xl">
      {page <= 1 ? null : (
        <button onClick={handlePrevPage} className="transition-all hover:text-blue-700 underline">
          Prev
        </button>
      )}
      <p>
        {page} of {lastPage}
      </p>
      <button onClick={handleNextPage} className="transition-all hover:text-blue-700 underline">
        Next
      </button>
    </div>
  );
};

export default Pagination;
