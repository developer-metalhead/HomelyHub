import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../CSS/FilterModal.css";
import "react-input-range/lib/css/index.css";
import InputRange from "react-input-range";

const FilterModal = ({ selectedFilters, onFilterChange, onClose }) => {
  const [priceRange, setPriceRange] = useState({
    min: selectedFilters.priceRange?.min || 600,
    max: selectedFilters.priceRange?.max || 30000,
  });
  const [propertyType, setPropertyType] = useState(
    selectedFilters.propertyType || ""
  );
  const [roomType, setRoomType] = useState(selectedFilters.roomType || "");
  const [amenities, setAmenities] = useState(selectedFilters.amenities || []);

  useEffect(() => {
    setPriceRange({
      min: selectedFilters.priceRange?.min || 600,
      max: selectedFilters.priceRange?.max || 30000,
    });
    setPropertyType(selectedFilters.propertyType || "");
    setRoomType(selectedFilters.roomType || "");
    setAmenities(selectedFilters.amenities || []);
  }, [selectedFilters]);

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
  };

  const handleMinInputChange = (e) => {
    const minValue = parseInt(e.target.value, 10);
    setPriceRange((prev) => ({ ...prev, min: minValue }));
  };

  const handleMaxInputChange = (e) => {
    const maxValue = parseInt(e.target.value, 10);
    setPriceRange((prev) => ({ ...prev, max: maxValue }));
  };

  const HandleFilterChange = () => {
    onFilterChange("minPrice", priceRange.min);
    onFilterChange("maxPrice", priceRange.max);
    onFilterChange("propertyType", propertyType);
    onFilterChange("roomType", roomType);
    onFilterChange("amenities", amenities);
    onClose();
  };

  const propertyTypeOptions = [
    { value: "House", label: "House", icon: "home" },
    { value: "Flat", label: "Flat", icon: "apartment" },
    { value: "Hotel", label: "Hotel", icon: "meeting_room" },
    { value: "Guest House", label: "Guest House", icon: "hotel" },
  ];

  const roomTypeOptions = [
    { value: "Entire Room", label: "Entire Room", icon: "hotel" },
    { value: "Room", label: "Room", icon: "meeting_room" },
    { value: "AnyType", label: "AnyType", icon: "apartment" },
  ];
  const amenitiesOptions = [
    { value: "Wifi", label: "Wifi", icon: "wifi" },
    { value: "Kitchen", label: "Kitchen", icon: "kitchen" },
    { value: "AC", label: "AC", icon: "ac_unit" },
    {
      value: "Washing Machine",
      label: "Washing Machine",
      icon: "local_laundry_service",
    },
    { value: "TV", label: "TV", icon: "tv" },
    { value: "Pool", label: "Pool", icon: "pool" },
    { value: "Free Parking", label: "Free Parking", icon: "local_parking" },
  ];
  const handleClearFilters = () => {
    setPriceRange({ min: 600, max: 30000 });
    setPropertyType("");
    setRoomType("");
    setAmenities([]);
  };

  const handleAmenitiesChange = (selectedAmenity) => {
    setAmenities((PrevAmenities) =>
      PrevAmenities.includes(selectedAmenity)
        ? PrevAmenities.filter((item) => item !== selectedAmenity)
        : [...PrevAmenities, selectedAmenity]
    );
  };
  const handlePropertyTypeChange = (selectedType) => {
    setPropertyType((PrevType) =>
      PrevType === selectedType ? "" : selectedType
    );
  };

  const handleRoomTypeChange = (selectedType) => {
    setRoomType((PrevType) => (PrevType === selectedType ? "" : selectedType));
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h4>
          Filters <hr />
        </h4>
        <button className="close-button" onClick={onClose}>
          <span>&times;</span>
        </button>
        <div className="modal-filters-container">
          <div className="filter-section"><label>Price range:</label></div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
