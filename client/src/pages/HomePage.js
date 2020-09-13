import React, { useEffect } from 'react';
import { Text } from '../styles/GenericStyled';
import { API_GET } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
  const status = useSelector(state => state.api.testAPI);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(API_GET('/testAPI'));
  }, []);

  return (
    <Text aling='center'>
      Home Page {status === 'done' ? 'Logged in' : 'Logged Out'}
    </Text>
  );
};

export default HomePage;
