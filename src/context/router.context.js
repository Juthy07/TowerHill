import { createContext, useState } from "react";
import routerConfig from "../router/router.config";

const initialState = {};

export const routerContext = createContext(initialState);

export const RouteContextProvider = (props) => {
  const [activePage, setActivePage] = useState(routerConfig.navPath.home);
  const [searchParams, setSearchParams] = useState({});

  return (
    <routerContext.Provider
      value={{
        activePage,
        setActivePage,
        searchParams,
        setSearchParams,
      }}
    >
      {props.children}
    </routerContext.Provider>
  );
};
