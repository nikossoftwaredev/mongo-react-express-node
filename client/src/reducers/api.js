import axios from 'axios';

const apiReducer = (state = {}, action) => {
  const trimmedPath = action.path && action.path.replace(/[^a-zA-Z ]/g, '');
  switch (action.type) {
    case 'STATUS':
      return { ...state, [trimmedPath]: action.status };
    case 'POST_SUCCESS':
      return { ...state, data: action.data };
    case 'GET_SUCCESS':
      return { ...state, data: action.data };
    case 'PUT':
      return true;
    case 'DELETE':
      return true;
    default:
      return state;
  }
};

export default apiReducer;
