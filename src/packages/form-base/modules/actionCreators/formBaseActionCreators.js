import { formBaseActions } from '../actions';


export const initForm = (type, data) => ({
  type: formBaseActions.INIT_FORM,
  data,
});
