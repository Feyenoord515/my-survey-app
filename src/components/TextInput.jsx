const TextInput = ({ label, name, required, onChange }) => {
    return (
      <div className="mb-4">
        <label htmlFor={name} className="block mb-2 font-bold text-gray-700">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        <input type="text" id={name} name={name} required={required} onChange={onChange} className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
      </div>
    );
  };
  
  export default TextInput;
  