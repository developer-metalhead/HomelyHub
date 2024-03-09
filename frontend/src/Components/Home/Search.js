import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import moment from "moment";

const Search = () => {
  const { RangePicker } = DatePicker;
  const [keyword, setKeyword] = useState({});
  const [value, setValue] = useState([null, null]); // Initialize value state with an array of null values

  const returnDates = (date, dateString) => {
    setValue(date);
    updateKeyword("dateIn", dateString[0]);
    updateKeyword("dateOut", dateString[1]);
  };

  const updateKeyword = (field, value) => {
    setKeyword((prevKeyword) => ({ ...prevKeyword, [field]: value }));
  };

  return (
    <>
      <div className="searchbar">
        <input
          className="search"
          id="search_destination"
          placeholder="Search Destination"
          type="text"
          value={keyword.city || ""}
          onChange={(e) => updateKeyword("city", e.target.value)}
        />
        <Space direction="vertical" size={12} className="search">
          <RangePicker
            value={value}
            format="YYYY-MM-DD"
            picker="date"
            className="date_picker"
            disabledDate={(current) => {
              return current && current.isBefore(moment(), "day");
            }}
            onChange={returnDates}
          />
        </Space>
        <input
          className="search"
          id="addguest"
          placeholder="Add Guests"
          type="number"
          onChange={(e) => updateKeyword("guests", e.target.value)}
        />
        <span className="material-symbols-outlined searchicon">search</span>
      </div>
    </>
  );
};

export default Search;
