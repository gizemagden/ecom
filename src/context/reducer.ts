import * as ACTION_TYPES from './ActionTypes';

interface ProductItem {
  id: string;
  name: string;
  brand: string;
  size: string;
  color: string;
  price: string;
  src: string;
}

interface Products extends Array<ProductItem>{}

interface State {
  products: Products,
  favorites: Products,
}

interface Action {
  type: string,
  value: string,
}

export const EcomReducer = (state: State, action: Action) => {
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
