import React from "react";

const EmailInput = ({ label, name, required, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
        type="email"
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default EmailInput;