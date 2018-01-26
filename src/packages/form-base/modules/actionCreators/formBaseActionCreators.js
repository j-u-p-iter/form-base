import { formBaseActions } from '../actions';


export const initForm = (type, data) => ({
  type: formBaseActions.INIT_FORM,
  payload: { type, data },
});

export const submitForm = formType => ({
  type: formBaseActions.SUBMIT_FORM,
  payload: { formType },
});

export const submitFormWithSuccess = data => ({
  type: formBaseActions.SUBMIT_FORM_WITH_SUCCESS,
  payload: { data },
});

export const submitFormWithErrors = (formType, errors) => ({
  type: formBaseActions.SUBMIT_FORM_WITH_ERRORS,
  payload: { formType, errors },
});
