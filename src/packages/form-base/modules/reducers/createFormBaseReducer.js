import invariant from 'invariant';

import { formBaseActions } from '../actions';
import { formBaseRowActions } from '../actions';


const actionsRunner = {
  [formBaseActions.INIT_FORM]: (state, { type, data }) => {
    return state;
  },

  [formBaseActions.SUBMIT_FORM]: (state, { type }) => {
    return state;
  },

  [formBaseRowActions.CHANGE_FIELD]: (state, { formType }) => {
    return state;
  },
};

const createFormBaseReducer = initialState => {
  invariant(initialState, 'Initial state should be passed.');

  const formBaseReducer = (state = initialState, { type, payload }) => {
    const actionRunner = actionsRunner[type];

    return actionRunner ? actionRunner(state, payload) : initialState;
  };

  return formBaseReducer;
};


export default createFormBaseReducer;
