
import { ActionTypes, ApiItem, TypeAction } from "./types";
export function getApiToData(data: ApiItem[]):TypeAction{
    return{type: ActionTypes.CALLAPI , data:data, id : ""}
}
export function mardRow(id: string):TypeAction{
    return{type: ActionTypes.MARD , data: [], id : id}
}
export function deleteRow(id: string):TypeAction{
    return{type: ActionTypes.DELETE , data: [], id : id}
}