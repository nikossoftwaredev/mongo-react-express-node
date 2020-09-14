const uiReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_HEADER':
      return { ...state, activeHeader: action.value };
    case 'ADD':
      return {};
    case 'DEC':
      return {};
    case 'LOG_IN':
      return { ...state, isLogged: action.value };
    default:
      return state;
  }
};

export default uiReducer;
