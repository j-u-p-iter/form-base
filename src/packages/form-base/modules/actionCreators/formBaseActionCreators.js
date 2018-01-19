import { formBaseActions } from '../actions';


export const initForm = (type, data) => ({
  type: formBaseActions.INIT_FORM,
  payload: { type, data },
});

export const submitForm = type => ({
  type: formBaseActions.SUBMIT_FORM,
  payload: { type },
});
