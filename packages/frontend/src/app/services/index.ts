import {DataBase,DBUrl} from "@wierdpim/common";

export function GetDb(sessionId: string): Promise <DataBase | null> {
    return fetch(DBUrl)
        .then((response) => {
            return response.json();
        });
}

export function MutateDb(sessionId: string){

}