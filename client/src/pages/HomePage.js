import React, { useEffect } from 'react';
import { Text } from '../styles/GenericStyled';
import { API_GET } from '../actions';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const isLogged = useSelector(state => state.ui.isLogged);
  return (
    <Text aling='center'>User is {isLogged ? 'logged in' : 'logged Out'}</Text>
  );
};

export default HomePage;
