//Should make seperate files for actions just like reducers
import axios from 'axios';

export const setIsLogged = value => {
  return {
    type: 'LOG_IN',
    value,
  };
};

export const setActiveHeader = value => {
  return {
    type: 'SET_ACTIVE_HEADER',
    value,
  };
};

/*** API  ***/
const API_STATUS = (path, status) => {
  return {
    type: 'STATUS',
    path,
    status,
  };
};

const POST_SUCCESS = data => {
  return {
    type: 'POST_SUCCESS',
    data,
  };
};

export const API_POST = (path, data) => {
  return dispatch => {
    dispatch(API_STATUS(path, 'posting'));
    axios
      .post(path, data)
      .then(response => {
        const data = response.data;
        dispatch(GET_SUCCESS(data));
      })
      .catch(error => {
        const msg = error.message;
        dispatch(API_STATUS(path, error.message));
      });
  };
};

const GET_SUCCESS = data => {
  return {
    type: 'GET_SUCCESS',
    data,
  };
};

export const API_GET = path => {
  return dispatch => {
    dispatch(API_STATUS(path, 'getting'));
    axios
      .get(path)
      .then(response => {
        // handle success
        const data = response.data;
        dispatch(API_STATUS(path, 'done'));
        dispatch(GET_SUCCESS(data));
      })
      .catch(error => {
        // handle error
        const msg = error.message;
        dispatch(API_STATUS(path, error.message));
      })
      .then(() => {
        // always executed
      });
  };
};
