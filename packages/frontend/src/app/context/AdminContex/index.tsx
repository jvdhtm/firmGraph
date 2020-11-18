import React, {createContext, ReactNode, useState} from "react";
import { useTranslation } from 'react-i18next';
import { GetDb } from '../../services';

export interface AdminContextType {
 test:string;
}

export const AdminContext = createContext<AdminContextType>({} as any);
export const AdminContextProvider = async (props: { children: ReactNode }) => {

    let DB = await GetDb('sessionid');
    const {i18n } = useTranslation();
    
    const value: AdminContextType = {
        test:''
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    );
};
