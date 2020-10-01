// export function mardRow(id: string){
//     return{type: TypeAc}

import { ActionTypes, ApiItem, TypeAction } from "./types";

// }
export function getApiToData(data: ApiItem[]):TypeAction{
    return{type: ActionTypes.CALLAPI , data:data, id: ""}
}