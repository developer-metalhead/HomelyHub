import React from "react";
import { DatePicker, Space } from "antd";

const Search = () => {
  const { RangePicker } = DatePicker;
  return (
    <div className="searchbar">
      <input
        className="search"
        id="search_destinaton"
        placeholder="Search Destination"
        type="text"
      />
      <Space direction="vertical" size={12} className="search">
        <RangePicker
          format="YYYY-MM-DD"
          picker="date"
          className="date_picker"
        />
      </Space>
      <input
        className="search"
        id="addguest"
        placeholder="Add Guest"
        type="number"
      />
      <span class="material-symbols-outlined searchicon">search</span>
    </div>
  );
};

export default Search;
