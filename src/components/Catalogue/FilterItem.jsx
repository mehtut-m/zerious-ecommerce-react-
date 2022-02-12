const FilterItem = ({ label, name, value }) => {
  return (
    <div className="filter-item py-2">
      <input type="checkbox" name="price" className="h-6 w-6" />
      <label className="ml-2">{label}</label>
    </div>
  );
};

export default FilterItem;
