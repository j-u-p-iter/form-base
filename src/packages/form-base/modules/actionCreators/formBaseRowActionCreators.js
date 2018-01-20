import { formBaseRowActions } from '../actions';


export const changeField = data => ({
  type: formBaseRowActions.CHANGE_FIELD,
  payload: data,
});
