import { useContext, useEffect } from "react";
import { routerContext } from "../context/router.context";

const useRouter = () => {
  const { activePage, setActivePage, searchParams, setSearchParams } =
    useContext(routerContext);

  /**
   * @param {'home' | 'contact' | 'reservation' | 'roomInfo'} path
   */
  const navigate = (path, search = {}) => {
    setActivePage(path);
    setSearchParams(search);

    window.history.pushState(
      {},
      "",
      new URL(window.location.origin + `/${path}` + objectToQueryString(search))
        .href
    );
  };

  const objectToQueryString = (search) => {
    if (search && typeof search === "object" && Object.keys(search).length) {
      return `?${Object.entries(search)
        .reduce((queryList, kv) => {
          const [key, value] = kv;
          queryList.push(`${key}=${value}`);
          return queryList;
        }, [])
        .join("&")}`;
    }
    return "";
  };

  const queryStringToObject = (queryString) => {
    if (queryString && typeof queryString === "string") {
      return queryString.split("&").reduce((object, stringPair) => {
        const [key, value] = stringPair.split("=");
        object[key] = value;
        return object;
      }, {});
    }
    return {};
  };

  const onUrlChange = () => {
    setActivePage(window.location.pathname.slice(1));
    setSearchParams(queryStringToObject(window.location.search.slice(1)));
  };

  useEffect(() => {
    // Backward navigation
    window.addEventListener("popstate", onUrlChange);

    return () => {
      window.removeEventListener("popstate", onUrlChange);
    };
  }, []);

  return {
    navigate,
    activePage,
    searchParams,
  };
};

export default useRouter;
