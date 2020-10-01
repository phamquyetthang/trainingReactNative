export interface ApiItem {
    id?: string;
    createdAt?: string;
    name?: string;
    email?: string;
    username?: string;
    balance?: string;
    factor_authentication?: boolean;
    user_ref?: string;
    status?: boolean;
  }
export interface TypeState{
    data: ApiItem[];
}
export enum ActionTypes{
    CALLAPI = "CALAPI",
    BOLD = "BOLD",
    DELETE = "DELETE",
    MARD = "MARD"
}

export interface TypeAction{
    type: ActionTypes,
    id: string,
    data: ApiItem[], 
}
