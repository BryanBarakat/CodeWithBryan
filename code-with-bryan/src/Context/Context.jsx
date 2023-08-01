import React, { createContext, useContext, useRef } from "react";

let context = createContext();

export const useParams = () => {
  return useContext(context);
};

export const Context = ({ children }) => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const bookingRef = useRef(null);

  return (
    <div>
      <context.Provider value={{ homeRef, aboutRef, skillsRef, bookingRef }}>
        {children}
      </context.Provider>
    </div>
  );
};

export default Context;
