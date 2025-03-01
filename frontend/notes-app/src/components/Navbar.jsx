import React, { useState, useEffect } from "react";
import ProfileInfo from "./Cards/ProfileInfo";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";

const Navbar = ({userInfo, onSearchNote, handleClearSearch}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear()
    navigate("/login");
  };

  const handleSearch = () => {
    if(searchQuery){
      onSearchNote(searchQuery)
    }
  };

  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch()
  };

 
  useEffect(() => {
    if (searchQuery === "") {
      handleClearSearch();
    }
  }, [searchQuery, handleClearSearch]);


  const handleSearchChange = (e) => {
    const newValue = e.target.value;
    setSearchQuery(newValue);
    
    
    if (newValue === "") {
      handleClearSearch();
    }
  };

  return (
    <nav className="bg-white text-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center gap-2 ml-10">
          📝 Notes
        </Link>
        <SearchBar
          value={searchQuery}
          onChange={handleSearchChange}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
        <div className="mr-10">
          <ProfileInfo userInfo={userInfo || {}} onLogout={onLogout} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;