import * as ACTION_TYPES from './ActionTypes';

export function addProductToFavorites(product) {
  return { type: ACTION_TYPES.ADD_TO_FAVORITES, value: product }
}
