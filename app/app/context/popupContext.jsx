"use client";
import { createContext, useContext, useReducer } from 'react';
import { v4 } from 'uuid';
import { AnimatePresence } from 'framer-motion';
import Popup from '../components/Notification/Popup';


const PopupContext = createContext();

export const PopupProvider = ({ children }) => {

    const popupReduser = (state, action) => {
        switch (action.type) {
            case 'ADD':
                return [...state, { ...action.payload }];

            case 'REMOVE':
                return state.filter(x => x.id !== action.id);

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(popupReduser, []);

    return (
        <PopupContext.Provider value={dispatch}>
            <div className="z-30 fixed bottom-[100px] ">
            <AnimatePresence>
                    {state.map(x => (
                        <Popup dispatch={dispatch} key={x.id} {...x} />
                    ))}
                </AnimatePresence>
            </div>
            {children}

        </PopupContext.Provider>
    )
}

export const usePopup = () => {
    const dispatch = useContext(PopupContext);

    return (props) => {
        dispatch({
            type: 'ADD',
            payload: {
                id: v4(),
                ...props
            }
        })
    }
}