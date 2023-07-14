import { useState, useContext, useEffect } from "react";

import UserContext from "./context";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "" });

  useEffect(() => setUser({ name: "Name" }), []);

  const values = { user, setUser };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("Encountered error!");
  }
  return context;
};

export { UserProvider, useUserContext };
