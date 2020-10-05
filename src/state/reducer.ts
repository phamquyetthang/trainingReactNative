import {ActionTypes, ApiItem, TypeAction, TypeState} from './types';

const initData: TypeState = {
  data: [],
  filter: 'NONE',
  checkAll: false,
  startAll: false,
};
var checkItem = (a: ApiItem[], id: string): ApiItem[] => {
  let objIndex = a.findIndex((obj) => obj.id == id);
  a[objIndex].factor_authentication = !a[objIndex].factor_authentication;
  return a;
};
export const reducer = (state = initData, action: TypeAction): TypeState => {
  switch (action.type) {
    case ActionTypes.CALLAPI: {
      return {
        ...state,
        data: action.data.map((i) => {
          return {...i, factor_authentication: false};
        }),
      };
    }
    case ActionTypes.MARD: {
      return {
        ...state,
        data: state.data.map((i) => {
          if (i.id === action.id) {
            return {...i, status: !i.status};
          } else {
            return i;
          }
        }),
      };
    }
    case ActionTypes.DELETE: {
      return {
        ...state,
        data: state.data.filter((i) => i.id !== action.id),
      };
    }
    case ActionTypes.FILTER: {
      return {
        ...state,
        filter:
          state.filter === 'NONE'
            ? 'STAR'
            : state.filter === 'STAR'
            ? 'NOSTAR'
            : 'NONE',
      };
    }
    case ActionTypes.CHECK: {
      return {
        ...state,
        data: checkItem(state.data, action.id),
      };
    }
    case ActionTypes.CHECKALL: {
      return {
        ...state,
        checkAll: !state.checkAll,
        data: state.data.map((i) => {
          return {...i, factor_authentication: !state.checkAll};
        }),
      };
    }
    case ActionTypes.MARDALL: {
      return {
        ...state,
        startAll: !state.startAll,
        data: state.data.map((i) => {
          if (i.factor_authentication === true) {
            return {...i, status: !state.startAll};
          } else {
            return i;
          }
        }),
      };
    }
    case ActionTypes.DELEALL: {
      return {
        ...state,
        data: state.data.filter((i) => i.factor_authentication !== true),
      };
    }
    default:
      return state;
  }
};
