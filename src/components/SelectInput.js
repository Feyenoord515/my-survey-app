import React from "react";

const SelectInput = ({ label, name, options, required, onChange }) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
          {label}
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={name}
          name={name}
          required={required}
          onChange={onChange}
        >
          <option value="">Selecciona una opción</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };

  export default SelectInput;