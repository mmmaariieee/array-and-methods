import { React, useEffect, useState } from "react";

function Slice() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [array, setArray] = useState([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    return () => {
      setArray(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);
    };
  }, []);

  console.log(array);

  function handleSlice (e) {
    e.preventDefault();
    if (first && second) {
        console.log(array);
        let newArr = array.slice(parseInt(first), parseInt(second));
        setArray(newArr);
        console.log(array);
    }
    if (first && !second) {
        let newArr = array.slice(parseInt(first));
        setArray(newArr);
    }
    if (!first && second) {
        setErrors("noFirstArgument")
        console.log(errors)
    }
  }

  return (
    <>
      <div className="cards">   
        <div className="card">
          <h3>.slice()</h3>
          <p>
            it can take 2 arguments: the first is the index where the slice
            should begin and the second is the index before which it should end
          </p>
          <div className="horizontal">
            <form onSubmit={handleSlice}>
              <button>Slice</button>
              <input
                type="text"
                id="first"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
              ></input>
              <input
                type="text"
                id="second"
                value={second}
                onChange={(e) => setSecond(e.target.value)}
              ></input>
            </form>
            </div>
          <div>
            {array.map((x, i) => {
              return (
                <p key={i}>
                  index = {i}: {x}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Slice;
