import React from "react";

const CheckboxInput = ({ label, name, required, onChange }) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          <input
            className="mr-2 leading-tight"
            type="checkbox"
            name={name}
            required={required}
            onChange={onChange}
          />
          <span className="text-sm">{label}</span>
        </label>
      </div>
    );
  };

  export default CheckboxInput;