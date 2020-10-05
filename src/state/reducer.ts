import {ActionTypes, TypeAction, TypeState} from './types';

const initData: TypeState = {
  data: [],
  filter: 'NONE',
  checkAll: false,
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
    case ActionTypes.CHECKALL: {
      return {
        ...state,
        checkAll: !state.checkAll,
        data: state.data.map((i) => {
          return {...i, factor_authentication: !state.checkAll};
        }),
      };
    }
    default:
      return state;
  }
};
