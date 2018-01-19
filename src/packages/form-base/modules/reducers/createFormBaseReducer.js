import invariant from 'invariant';


const createFormBaseReducer = initialState => {
  invariant(initialState, 'Initial state should be passed.');

  const formBaseReducer = (state = initialState, action) => {
    return state;
  };

  return formBaseReducer;
};


export default createFormBaseReducer;
