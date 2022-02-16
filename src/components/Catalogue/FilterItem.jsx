const FilterItem = ({ label, name, value, setFilterByBrand }) => {
  return (
    <div className="filter-item py-2">
      <input
        type="checkbox"
        name="price"
        className="h-6 w-6"
        value={value}
        onChange={(e) => {
          if (e.target.checked) {
            setFilterByBrand((prev) => [...prev, e.target.value]);
          } else {
            setFilterByBrand((prev) => {
              const idx = prev.findIndex((item) => item === e.target.value);

              const newState = [...prev];
              newState.splice(idx, 1);
              return newState;
            });
          }
        }}
      />
      <label className="ml-2">{label}</label>
    </div>
  );
};

export default FilterItem;
