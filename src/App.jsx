import { useState } from "react";
import { RouteContextProvider } from "./context/router.context";
import Routes from "./router/routes";

const App = () => {
  console.log("app loaded");
  const [state, setS] = useState(1);

  return (
    <RouteContextProvider>
      <Routes state={state} setS={setS} />
    </RouteContextProvider>
  );
};

export default App;
