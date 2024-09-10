import React, { useState } from "react";
import "./SearchBarStyles.scss";
interface SearchBarProps {
  onSearch: (name: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(name);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <h1 className="title-primary">Enter a Name</h1>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a name"
        required
      />
      <button className='button-primary' type="submit">Submit</button>
    </form>
  );
};

export default SearchBar;
