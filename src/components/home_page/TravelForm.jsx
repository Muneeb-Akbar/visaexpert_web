import React, { useState, useEffect } from "react";
import DateRangeInput from "./DateRange";

const TravelForm = (props) => {
  const [option, setOption] = useState(null);
  const [focus, setFocus] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);

  useEffect(() => {
    if (props.data) {
      setOption(props.data.option); // Assuming `option` is part of props.data
      setFormData({
        leavingFrom: props.data.leavingFrom || "",
        goingTo: props.data.goingTo || "",
        fromDate: props.data.fromDate || "",
        toDate: props.data.toDate || "",
        gender: props.data.gender || "",
      });
      console.log("Updated option:", props.data);
    }
  }, [props.data]);

  const [formData, setFormData] = useState({
    leavingFrom: "",
    goingTo: "",
    fromDate: "",
    toDate: "",
    gender: "",
  });
  console.log(formData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Filter locations based on the input value for leavingFrom and goingTo
    if (e.target.name === "leavingFrom" || e.target.name === "goingTo") {
      const filtered = locations.filter((location) =>
        location.toLowerCase().startsWith(e.target.value.toLowerCase())
      );
      setFilteredLocations(filtered);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // Dummy data for Leaving From and Going To dropdowns
  const locations = [
    "Sydney",
    "Melbourne",
    "Brisbane",
    "Adelaide",
    "Perth",
    "Hobart",
    "China",
    "Chicago",
    "Chennai",
  ];

  // Handles when input loses focus
  const handleBlur = (field) => {
    setTimeout(() => {
      if (focus === field) {
        setFocus(""); // Hides the dropdown after blur
      }
    }, 200); // Small delay to ensure click on dropdown is registered
  };

  return (
    <form onSubmit={handleSubmit}>
      {option !== "visa" ? (
        <div className="p-4 md:flex md:gap-4">
          {/* Leaving From Input */}
          <div>
            <div className="relative mb-4">
              <input
                type="text"
                id="leavingFrom"
                name="leavingFrom"
                value={formData.leavingFrom}
                onChange={handleChange}
                onFocus={() => setFocus("leaving")}
                onBlur={() => handleBlur("leaving")}
                placeholder="Leaving from"
                className="w-full md:w-[20vw] md:h-16 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              {focus === "leaving" && (
                <div className="bg-white absolute w-full">
                  {filteredLocations.length > 0 ? (
                    filteredLocations.map((location, index) => (
                      <p
                        key={index}
                        className="cursor-pointer p-2 hover:bg-gray-200"
                        onClick={() => {
                          setFormData({ ...formData, leavingFrom: location });
                          setFocus(""); // Hide dropdown on select
                        }}
                      >
                        {location}
                      </p>
                    ))
                  ) : (
                    <p className="p-2">No locations found</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Going To Input */}
          <div>
            <div className="relative mb-4">
              <input
                type="text"
                id="goingTo"
                name="goingTo"
                value={formData.goingTo}
                onChange={handleChange}
                onFocus={() => setFocus("going")}
                onBlur={() => handleBlur("going")}
                placeholder="Going To"
                className="w-full md:w-[20vw] md:h-16 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              {focus === "going" && (
                <div className="bg-white absolute w-full">
                  {filteredLocations.length > 0 ? (
                    filteredLocations.map((location, index) => (
                      <p
                        key={index}
                        className="cursor-pointer p-2 hover:bg-gray-200"
                        onClick={() => {
                          setFormData({ ...formData, goingTo: location });
                          setFocus(""); // Hide dropdown on select
                        }}
                      >
                        {location}
                      </p>
                    ))
                  ) : (
                    <p className="p-2">No locations found</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Date Fields */}
          <div className="mb-4">
            <DateRangeInput
              fromDate={formData.fromDate}
              toDate={formData.toDate}
              onDateChange={(newDates) =>
                setFormData((prev) => ({
                  ...prev,
                  fromDate: newDates.fromDate,
                  toDate: newDates.toDate,
                }))
              }
            />
          </div>

          {/* Gender Selection */}
          <div className="mb-4">
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 md:w-[20vw] md:h-16 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      ) : (
        <div>{/* Visa-related form can go here */}</div>
      )}
    </form>
  );
};

export default TravelForm;
