import {ActionTypes, ApiItem, TypeAction} from './types';
export function getApiToData(data: ApiItem[]): TypeAction {
  return {type: ActionTypes.CALLAPI, data: data, id: ''};
}
export function mardRow(id: string): TypeAction {
  return {type: ActionTypes.MARD, data: [], id: id};
}
export function deleteRow(id: string): TypeAction {
  return {type: ActionTypes.DELETE, data: [], id: id};
}
export function filterData(): TypeAction {
  return {type: ActionTypes.FILTER, data: [], id: ''};
}
export function checkRow(id: string): TypeAction {
  return {type: ActionTypes.CHECK, data: [], id: id};
}
export function checkAll(): TypeAction {
  return {type: ActionTypes.CHECKALL, data: [], id: ''};
}
export function mardAll(): TypeAction {
  return {type: ActionTypes.MARDALL, data: [], id: ''};
}
export function deleAll(): TypeAction {
  return {type: ActionTypes.DELEALL, data: [], id: ''};
}
