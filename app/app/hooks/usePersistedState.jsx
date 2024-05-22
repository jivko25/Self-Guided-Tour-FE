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

