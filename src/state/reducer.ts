import {ActionTypes, TypeAction, TypeState} from './types';

const initData: TypeState = {
  data: [],
};
export const reducer = (state = initData, action: TypeAction): TypeState => {
  switch (action.type) {
    case ActionTypes.CALLAPI: {
      return {
        ...state,
        data: action.data?.concat(state.data),
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
    default:
      return state;
  }
};
