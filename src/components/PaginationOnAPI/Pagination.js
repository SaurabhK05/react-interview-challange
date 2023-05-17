import React from "react";

export default function Pagination() {
  const [allEntries, setAllEntries] = React.useState([]);
  const [currPageEntrie, setCurrPageEntrie] = React.useState([]);
  const [pageCount, setPageCount] = React.useState(1);
  const [arrayCount, setArrayCount] = React.useState(50);
  const totalPage = Math.ceil(allEntries.count / 50);

  React.useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.publicapis.org/entries";
      const response = await fetch(url);
      const data = await response.json();

      setAllEntries(data);
      setCurrPageEntrie(data.entries.slice(0, arrayCount));
    };

    fetchData();
  }, []);

  const fetchPrevious = () => {
    let currentEntryCount = arrayCount;
    setPageCount((prevState) => prevState - 1);
    let count = arrayCount - 50;
    // console.log(count);
    setArrayCount(count);
    const newData = allEntries.entries.slice(count, currentEntryCount);
    // console.log(newData, "newData");

    setCurrPageEntrie(newData);
  };

  const fetchNext = () => {
    let currentEntryCount = arrayCount;
    setPageCount((prevState) => prevState + 1);
    let count = arrayCount + 50;
    // console.log(count);
    setArrayCount(count);
    const newData = allEntries.entries.slice(currentEntryCount, count);
    // console.log(newData, "newData");

    setCurrPageEntrie(newData);

    // console.log(currentEntryCount, arrayCount, "currPageEntrie");
  };
  return (
    <div>
      <div>
        <h2>Entrie 1</h2>
        {currPageEntrie.map((el, ind) => {
          return (
            <ul key={el.Link}>
              <li>{ind}</li>
              <li>
                API: <strong>{el.API}</strong>
              </li>
              <li>Description: {el.Description}</li>
              <li>Link: {el.Link}</li>
              <li>Category: {el.Category}</li>
            </ul>
          );
        })}
      </div>
      <button onClick={fetchPrevious} disabled={pageCount <= 1}>
        Previous
      </button>
      <button onClick={fetchNext} disabled={pageCount >= totalPage}>
        Next
      </button>
    </div>
  );
}
