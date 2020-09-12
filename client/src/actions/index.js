export const setIsLogged = state => {
  return {
    type: 'LOG_IN',
    state,
  };
};

export const setActiveHeader = value => {
  return {
    type: 'SET_ACTIVE_HEADER',
    value,
  };
};
