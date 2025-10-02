import { useState } from "react";

const FunCounter = () => {

    const [counter, setCounter] = useState(0);

  const inc = () => {
    setCounter(counter + 1);
  };

  const dec = () => {
    setCounter(counter > 0 ? counter - 1 : 0);
  };

  return (

    <div className="col-lg-4 mx-auto my-5">
      <div className="shadow-lg rounded-2xl text-center p-4 bg-dark text-white">
        <h2 className="mb-3">Function Counter - {counter}</h2>
        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-outline-light px-4 py-2 fw-bold" onClick={inc}>
            +
          </button>
          <button className="btn btn-outline-danger px-4 py-2 fw-bold" onClick={dec}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default FunCounter;
