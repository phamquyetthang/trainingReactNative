export interface ApiItem {
    id?: string;
    createdAt?: string;
    name?: string;
    email?: string;
    username?: string;
    balance?: string;
    factor_authentication: false|boolean;
    user_ref?: string;
    status?: boolean;
  }
export interface TypeState{
    data: ApiItem[];
    filter: string;
    checkAll: boolean;
}
export enum ActionTypes{
    CALLAPI = "CALAPI",
    DELETE = "DELETE",
    MARD = "MARD",
    FILTER = "FILTER",
    CHECKALL = "CHECKALL"
}
export interface TypeAction{
    type: ActionTypes,
    id: string,
    data: ApiItem[], 
}
