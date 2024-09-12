"use client";
import { createContext, useContext, useReducer } from "react";
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

  // Dissapearing popup
  const addPopup = (payload) => {
    const id = v4();
    dispatch({ type: "ADD", payload: { id, ...payload } });

    // Automatically remove the popup after 3 seconds
    setTimeout(() => {
      dispatch({ type: "REMOVE", id });
    }, 3000);
  };

  const [state, dispatch] = useReducer(popupReduser, []);

  return (
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
  );
};

export const usePopup = () => {
  const addPopup = useContext(PopupContext);

  return (props) => {
    addPopup(props);
  };
};
