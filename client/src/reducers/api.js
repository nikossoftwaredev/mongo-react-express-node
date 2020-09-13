import axios from 'axios';

const apiReducer = (state = {}, action) => {
  const trimmedPath = action.path && action.path.replace(/[^a-zA-Z ]/g, '');
  let newState = { ...state, [trimmedPath]: 'fetching' };
  switch (action.type) {
    case 'POST':
      axios
        .post(action.path, action.data)
        .then(response => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      return { ...state, login: 'done' };
    case 'GET':
      axios
        .get(action.path)
        .then(response => {
          // handle success
          newState = { ...newState, [action.path]: 'done' };
          console.log(response);
        })
        .catch(error => {
          // handle error
          console.log(error);
        })
        .then(() => {
          // always executed
        });
      return newState;
    case 'PUT':
      return true;
    case 'DELETE':
      return true;
    default:
      return state;
  }
};

export default apiReducer;
