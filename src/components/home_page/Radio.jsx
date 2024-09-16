import React, { useState } from "react";

const Radio = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  props.data(selectedOption);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex justify gap-4 mt-4 px-6 ">
      <label className="inline-flex items-center mt-2">
        <input
          type="radio"
          className="form-radio text-blue-600"
          name="option"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
        />
        <span className="ml-2 text-sm ">Return</span>
      </label>

      <label className="inline-flex items-center mt-2">
        <input
          type="radio"
          className="form-radio text-blue-600"
          name="option"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleOptionChange}
        />
        <span className="ml-2 text-sm ">One-way</span>
      </label>

      <label className="inline-flex items-center mt-2">
        <input
          type="radio"
          className="form-radio text-blue-600"
          name="option"
          value="option3"
          checked={selectedOption === "option3"}
          onChange={handleOptionChange}
        />
        <span className="ml-2 text-sm ">Multi-city</span>
      </label>
    </div>
  );
};

export default Radio;
