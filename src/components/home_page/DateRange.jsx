import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css"; // Theme css file
import { format } from "date-fns";

function DateRangeInput() {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [showPicker, setShowPicker] = useState(false);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
    setShowPicker(false); // Close the picker after selecting dates
  };

  return (
    <div className="relative ">
      {/* Input fields */}
      <div
        className="flex items-center border border-gray-300 bg-white md:w-80 md:h-16 rounded-md p-2 cursor-pointer h-10 justify-between focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setShowPicker((prev) => !prev)}
      >
        <input
          type="text"
          className="w-24 px-2 py-1 border-none focus:outline-none text-gray-700 text-sm"
          value={format(dateRange[0].startDate, "EEE, MMM d")}
          readOnly
        />
          <span className="mx-2 flex-none items-end  text-gray-500">—</span>
        <input
          type="text"
          className="w-24 px-2 py-1 border-none focus:outline-none text-gray-700 text-sm "
          value={format(dateRange[0].endDate, "EEE, MMM d")}
          readOnly
        />
      </div>

      {/* Date range picker */}
      {showPicker && (
        <div className="absolute z-10">
          <DateRangePicker
            ranges={dateRange}
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
          />
        </div>
      )}
    </div>
  );
}

export default DateRangeInput;
