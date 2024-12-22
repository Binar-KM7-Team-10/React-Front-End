import React, { useState, useEffect } from "react";
import { FiList, FiBell, FiUser } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const IconGrubNavbar = () => {
  const location = useLocation();
  
  const [isListActive, setIsListActive] = useState(false);
  const [isBellActive, setIsBellActive] = useState(false);
  const [isUserActive, setIsUserActive] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") { 
      setIsListActive(false);
      setIsBellActive(false);
      setIsUserActive(false);
    } else if (location.pathname.includes("/profile")) { 
      setIsListActive(false);
      setIsBellActive(false);
      setIsUserActive(true);
    }else if (location.pathname.includes("/history-order")) { 
      setIsListActive(true);
      setIsBellActive(false);
      setIsUserActive(false);
    } 
    else if (location.pathname.includes("/notification")) {
      setIsListActive(false);
      setIsBellActive(true);
      setIsUserActive(false);
    }
  }, [location]);

  return (
    <div className="flex gap-5">
      <Link to="/history-order">
        <FiList
          size={20}
          color={isListActive ? "#A06ECE" : "inherit"}
        />
      </Link>
      
      <Link to="/notification"> 
        <FiBell
          size={20}
          color={isBellActive ? "#A06ECE" : "inherit"} 
        />
      </Link>
      
      <Link to="/profile">
        <FiUser
          size={20}
          color={isUserActive ? "#A06ECE" : "inherit"} 
        />
      </Link>
    </div>
  );
};

export default IconGrubNavbar;
