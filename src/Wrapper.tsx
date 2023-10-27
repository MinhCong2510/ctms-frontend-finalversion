import { RoleContext } from "./RoleContext";

export default function Wrapper({ role, setRole, children }) {
    return (
      <RoleContext.Provider value={{role, setRole}}>
          {children}
      </RoleContext.Provider>
    );
  }