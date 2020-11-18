import React, {createContext, ReactNode, useState} from "react";
import { useTranslation } from 'react-i18next';

export interface LocalizationContextState {
    localePIM: string;
    setLocalePIM: (localePIM: string) => void;
    localeApp: string;
}


export const defaultLocalizationContextState: LocalizationContextState = {
    localePIM: "sv",
    setLocalePIM: (_) => {
    },
    localeApp: "sv-SE"
};

export interface LocalizationContextInternalState {
    localePIM: string;
}

export const LocalizationContext = createContext<LocalizationContextState>(defaultLocalizationContextState);

export const LocalizationContextProvider = (props: { children: ReactNode }) => {
    const [state, setState] = useState<LocalizationContextInternalState>(() => {
        return {
            localePIM: "sv",
        };
    });

    const {i18n } = useTranslation();
    
    const value: LocalizationContextState = {
        ...defaultLocalizationContextState,
        localePIM: state.localePIM,
        setLocalePIM: (localePIM: string) => {
            setState({...state, localePIM}) 
            i18n.changeLanguage(localePIM);
        }
    }

    


    return (
        <LocalizationContext.Provider value={value}>
            {props.children}
        </LocalizationContext.Provider>
    );
};
