import {ActionTypes, TypeAction, TypeState} from './types';

const initData: TypeState = {
  data: [
    // {
    //   id: '1',
    //   name: 'kk',
    //   email: 'dasdas',
    //   balance: '112',
    //   createdAt: 'sdasd',
    //   factor_authentication: true,
    //   status: true,
    //   user_ref: 'sdad',
    //   username: '121212',
    // },
  ],
};
export const reducer = (state = initData, action: TypeAction): TypeState => {
  switch (action.type) {
    case ActionTypes.CALLAPI: {
      return {
        ...state,
        data: action.data?.concat(state.data)
      }
    }
    case ActionTypes.BOLD: {
      return state;
    }
    default:
      return state;
  }
};
