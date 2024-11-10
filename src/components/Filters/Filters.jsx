import css from "./Filters.module.css";

function Filters({
  location,
  type,
  equipment,
  onLocationChange,
  onTypeChange,
  onEquipmentChange,
  onSearch,
}) {
  const handleCheckboxChange = (e) => {
    onEquipmentChange(e.target.name);
  };

  return (
    <div className={css.filters}>
      <h3>Filters</h3>
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={onLocationChange}
        className={css.input}
      />

      <div>
        <h4>Vehicle Type</h4>
        <div className={css.filterOptions}>
          {["Van", "Fully Integrated", "Alcove"].map((option) => (
            <button
              key={option}
              onClick={() => onTypeChange(option)}
              className={type === option ? css.activeButton : css.button}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4>Vehicle Equipment</h4>
        <div className={css.filterOptions}>
          {["AC", "kitchen", "TV", "bathroom"].map((equip) => (
            <button
              key={equip}
              onClick={() => handleCheckboxChange({ target: { name: equip } })}
              className={
                equipment.includes(equip) ? css.activeButton : css.button
              }
            >
              {equip}
            </button>
          ))}
        </div>
      </div>

      <button onClick={onSearch} className={css.searchButton}>
        Search
      </button>
    </div>
  );
}

export default Filters;
