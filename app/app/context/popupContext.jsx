"use client";
import { createContext, Suspense, useContext, useReducer } from "react";
import { v4 } from "uuid";
import { AnimatePresence } from "framer-motion";
import Popup from "../components/Notification/Popup";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const popupReduser = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, { ...action.payload }];

      case "REMOVE":
        return state.filter((x) => x.id !== action.id);

      default:
        return state;
    }
  };

  // Dissapearing popup - default 3 seconds(if no prop is passed)
  const addPopup = (payload) => {
    const { timeout = 3000, ...rest } = payload; // Destructure timeout and set default
    const id = v4();
    dispatch({ type: "ADD", payload: { id, ...rest } });

    // If timeout is null, do not set a timeout to make the popup stay indefinitely
    if (timeout !== null) {
      setTimeout(() => {
        dispatch({ type: "REMOVE", id });
      }, timeout);
    }
  };

  const [state, dispatch] = useReducer(popupReduser, []);

  return (
    <Suspense>
      <PopupContext.Provider value={addPopup}>
        <div className="z-30 fixed bottom-[100px] w-11/12 ">
          <AnimatePresence>
            {state.map((x) => (
              <Popup dispatch={dispatch} key={x.id} {...x} />
            ))}
          </AnimatePresence>
        </div>
        {children}
      </PopupContext.Provider>
    </Suspense>
  );
};

export const usePopup = () => {
  const addPopup = useContext(PopupContext);

  return (props) => {
    addPopup(props);
  };
};
