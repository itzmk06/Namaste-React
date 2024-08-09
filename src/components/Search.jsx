import "remixicon/fonts/remixicon.css";

const Search = () => {
  return (
    <div className="search-bar">
      <div className="search1">
        <i className="ri-search-line s-item-1"></i>
        <input
          className="s-input"
          type="text"
          placeholder="Type a command or search"
        />
      </div>
      <div className="search2">
        <i className="ri-windows-fill s-item-2"></i>
        <h5>+K</h5>
      </div>
    </div>
  );
};

export default Search;
