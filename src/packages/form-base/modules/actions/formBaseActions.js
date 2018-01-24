import { createFormBaseActionType } from '../utils';


export const INIT_FORM = createFormBaseActionType('INIT_FORM');

export const SUBMIT_FORM = createFormBaseActionType('SUBMIT_FORM');
export const SUBMIT_FORM_WITH_SUCCESS = createFormBaseActionType('SUBMIT_FORM_WITH_SUCCESS');
export const SUBMIT_FORM_WITH_ERROR = createFormBaseActionType('SUBMIT_FORM_WITH_ERROR');
