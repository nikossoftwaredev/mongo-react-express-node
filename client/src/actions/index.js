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

export const API_POST = (path, data) => {
  return {
    type: 'POST',
    path,
    data,
  };
};

export const API_GET = path => {
  return {
    type: 'GET',
    path,
  };
};
