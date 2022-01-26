const FormInput = ({ title, type, label, value, handleChange }) => {
  return (
    <div className="w-full md:w-full px-3">
      <label
        className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={`form-${title}`}
      >
        {label}
      </label>

      <input
        className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
        id={`form-${title}`}
        name={title}
        type={type}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default FormInput;
