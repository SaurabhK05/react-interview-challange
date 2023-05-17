import React from "react";

export default function Pagination() {
  const [allEntries, setAllEntries] = React.useState([]);
  const [currPageEntrie, setCurrPageEntrie] = React.useState([]);
  const [pageCount, setPageCount] = React.useState(1);
  const [arrayCount, setArrayCount] = React.useState(50);

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

  const fetchPrevious = () => {};

  const fetchNext = () => {
    debugger;
    let currentEntryCount = arrayCount;
    setPageCount((prevState) => prevState + 1);
    setArrayCount((prevState) => prevState + 50);
    setCurrPageEntrie(allEntries.entries.slice(currentEntryCount, arrayCount));

    console.log(currPageEntrie, arrayCount, "currPageEntrie");
  };
  return (
    <div>
      <div>
        <h2>Entrie 1</h2>
        {currPageEntrie.map((el) => {
          return (
            <ul key={el.Link}>
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
      <button onClick={fetchPrevious}>Previous</button>
      <button onClick={fetchNext}>Next</button>
    </div>
  );
}
