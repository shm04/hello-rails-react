import axios from 'axios';

export const fetchGreeting = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/messages/random_greeting');
      dispatch({ type: 'FETCH_GREETING_SUCCESS', payload: response.data.message });
    } catch (error) {
      dispatch({ type: 'FETCH_GREETING_FAILURE', payload: error.message });
    }
  };
};