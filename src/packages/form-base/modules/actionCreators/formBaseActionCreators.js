import { formBaseActions } from '../actions';


export const initForm = (type, data) => ({
  type: formBaseActions.INIT_FORM,
  payload: { type, data },
});

export const submitForm = type => ({
  type: formBaseActions.SUBMIT_FORM,
  payload: { type },
});

export const submitFormWithSuccess = data => ({
  type: formBaseActions.SUBMIT_FORM_WITH_SUCCESS,
  payload: { data },
});

export const submitFormWithError = (type, errors) => ({
  type: formBaseActions.SUBMIT_FORM_WITH_ERROR,
  payload: { type, errors },
});
