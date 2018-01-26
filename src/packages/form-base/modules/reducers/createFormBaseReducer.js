import invariant from 'invariant';

import { formBaseActions } from '../actions';
import { formBaseRowActions } from '../actions';


const updateState = (state, formType, dataToUpdate) => (
  {
    ...state,
    [formType]: {
      ...state[formType],
      ...dataToUpdate
    },
  }
);

const actionsRunner = {
  [formBaseActions.INIT_FORM]: (state, { type, data }) => {
    return state;
  },

  [formBaseActions.SUBMIT_FORM]: (state, { formType }) => {
    return updateState(state, formType, { errors: [] });
  },

  [formBaseActions.SUBMIT_FORM_WITH_ERRORS]: (state, { formType, errors }) => {
    return updateState(state, formType, { errors });
  },

  [formBaseRowActions.CHANGE_FIELD]: (state, { formType, name, value }) => {
    return updateState(state, formType, { [name]: value });
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
