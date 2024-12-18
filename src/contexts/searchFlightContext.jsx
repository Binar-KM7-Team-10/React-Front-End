// import { createContext, useContext, useEffect, useState } from "react";

// const SearchContext = createContext();

// export const SearchProvider = ({ children }) => {
//     const [searchParams, setSearchParams] = useState({});
//     return (
//         <SearchContext.Provider value={{ searchParams, setSearchParams }}>
//             {children}
//         </SearchContext.Provider>
//     );
// };

// export const useSearchContext = () => useContext(SearchContext);

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useState(() => {
    const savedParams = Cookies.get("searchParams");
    return savedParams ? JSON.parse(savedParams) : {};
  });

  const updateSearchParams = (params) => {
    if (JSON.stringify(params) !== JSON.stringify(searchParams)) {
      setSearchParams(params);
      Cookies.set("searchParams", JSON.stringify(params), { expires: 7 });
    }
  };

  const getSearchParamsFromCookies = () => {
    const savedParams = Cookies.get("searchParams");
    return savedParams ? JSON.parse(savedParams) : {};
  };

//   useEffect(() => {
//     const savedParams = Cookies.get("searchParams");
//     if (savedParams) {
//       setSearchParams(JSON.parse(savedParams));
//     }
//   }, []);

  return (
    <SearchContext.Provider
      value={{
        searchParams,
        setSearchParams: updateSearchParams,
        getSearchParamsFromCookies,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
