import React, { useState, useEffect } from "react";
import ProfileInfo from "./Cards/ProfileInfo";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import { Menu } from "lucide-react";

const Navbar = ({userInfo, onSearchNote, handleClearSearch}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-black p-2 md:p-4 shadow-md">
      <div className="container mx-auto">
       
        <div className="hidden md:flex justify-between items-center">
          <Link to="/" className="text-xl font-bold flex items-center gap-2 md:ml-4 lg:ml-10">
            📝 Notes
          </Link>
          <SearchBar
            value={searchQuery}
            onChange={handleSearchChange}
            handleSearch={handleSearch}
            onClearSearch={onClearSearch}
          />
          <div className="md:mr-4 lg:mr-10">
            <ProfileInfo userInfo={userInfo || {}} onLogout={onLogout} />
          </div>
        </div>
        
        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold flex items-center gap-2">
              📝 Notes
            </Link>
            <button 
              onClick={toggleMenu}
              className="p-2 focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>
          
          {isMenuOpen && (
            <div className="flex flex-col mt-4 space-y-4">
              <SearchBar
                value={searchQuery}
                onChange={handleSearchChange}
                handleSearch={handleSearch}
                onClearSearch={onClearSearch}
              />
              <div className="py-2">
                <ProfileInfo userInfo={userInfo || {}} onLogout={onLogout} />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;