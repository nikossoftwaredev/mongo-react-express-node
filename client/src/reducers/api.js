import axios from 'axios';

const apiReducer = (state = false, action) => {
  switch (action.type) {
    case 'POST':
      axios
        .post(action.path, action.data)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      return state;
    case 'GET':
      axios
        .get(action.path)
        .then(response => {
          // handle success
          console.log(response);
        })
        .catch(error => {
          // handle error
          console.log(error);
        })
        .then(() => {
          // always executed
        });
      return state;
    case 'PUT':
      return true;
    case 'DELETE':
      return true;
    default:
      return state;
  }
};

export default apiReducer;
