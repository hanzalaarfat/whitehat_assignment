import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Form() {
  const history = useHistory();

  const [rectengle, setRectengle] = useState({
    number: "",
    width: "",
    height: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setRectengle({ ...rectengle, [name]: value }); //// will take the name from line 15
  };
  const PostData = async (e) => {
    e.preventDefault();
    let { number, width, height } = rectengle;

    localStorage.setItem("number", number);
    localStorage.setItem("height", height);
    localStorage.setItem("width", width);
    history.push("/rectangle");
  };

  return (
    <div>
      <div className="container">
        <div className="row row-cols-lg-8 row-cols-sm-2 row-cols-md-8  justify-content-center"></div>
        <form method="POST" className="signup-form" id="signup-form">
          <div className="form-group">
            <label htmlFor="name">Enter No of Rectengle</label>
            <input
              type="number"
              className="form-control"
              name="number"
              id="number"
              autoComplete="off"
              value={rectengle.number}
              onChange={handleInputs}
              placeholder="Number of Rectengle"
            />
          </div>

          <div className="form-group">
            <label htmlFor="width">width</label>
            <input
              type="number"
              className="form-control"
              name="width"
              id="width"
              autoComplete="off"
              value={rectengle.width}
              onChange={handleInputs}
              placeholder="rectengle width"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Height</label>
            <input
              type="number"
              className="form-control"
              name="height"
              id="height"
              autoComplete="off"
              value={rectengle.height}
              onChange={handleInputs}
              placeholder="Height"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            name="Signup"
            onClick={PostData}
          >
            Draw Rectengle
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
