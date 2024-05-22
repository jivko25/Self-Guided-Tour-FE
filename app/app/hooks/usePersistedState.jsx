import { useState, useEffect } from "react";

export const usePersistedState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      const persistedState = localStorage.getItem(key);
      if (persistedState) {
        return JSON.parse(persistedState);
      }
    }
    return defaultValue;
  });

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state]);

  return [state, setState];
};


// import { useState } from "react";
// export const usePersistedState = (key, defaultValue) => {
//   const [state, setState] = useState(() => {
//     const persistedState = localStorage.getItem(key);
//     if (persistedState) {
//       return JSON.parse(persistedState);
//     }
//     return defaultValue;
//   });

//   const setPersistedState = (value) => {
//     setState(value);
//     let serializedValue;
//     if (typeof value === "function") {
//       serializedValue = JSON.stringify(value(state));
//     } else {
//       serializedValue = JSON.stringify(value);
//     }
//     if (typeof localStorage !== 'undefined') {
//       localStorage.setItem(key, serializedValue);

//   }
//   };
//   return [state, setPersistedState];
// };
