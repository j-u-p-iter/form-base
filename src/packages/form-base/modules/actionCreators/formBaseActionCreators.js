import { formBaseActions } from '../actions';


export const initForm = (type, data) => ({
  type: formBaseActions.INIT_FORM,
  payload: { type, data },
});

export const submitForm = formType => ({
  type: formBaseActions.SUBMIT_FORM,
  payload: { formType },
});

export const submitFormWithSuccess = ({ formType, result }) => ({
  type: formBaseActions.SUBMIT_FORM_WITH_SUCCESS,
  payload: { formType, result },
});

export const submitFormWithErrors = (formType, errors) => ({
  type: formBaseActions.SUBMIT_FORM_WITH_ERRORS,
  payload: { formType, errors },
});

export const resetForm = formType => ({
  type: formBaseActions.RESET_FORM,
  payload: { formType },
});
