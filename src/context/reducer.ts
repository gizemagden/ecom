import * as ACTION_TYPES from './ActionTypes';

export const EcomReducer = (state: object, action: object) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [ ...state.favorites, action.value]
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
