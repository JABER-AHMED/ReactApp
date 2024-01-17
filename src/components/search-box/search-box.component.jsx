import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, handleChange }) => {
  return (
    <input
      type="search"
      className={`search-box ${className}`}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;