import React, { useState } from 'react';
import { Text, BodyWithPadding, VerticalItems } from '../styles/GenericStyled';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import { StyledButton } from '../styles/GenericStyled';
import { API_POST } from '../actions';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
  const [data, setData] = useState({ username: '', password: '' });
  const dispatch = useDispatch();

  const onChange = e => {
    const tmpData = { [e.target.name]: e.target.value };
    setData(prevData => ({ ...prevData, ...tmpData }));
  };
  return (
    <BodyWithPadding>
      <FormControl onChange={onChange} fullWidth>
        <VerticalItems margin='20px'>
          <img
            alt='logo'
            style={{ width: '50px', height: '50px' }}
            src='https://material-ui.com/static/logo.png'
          />
          <Text align='center'>Login</Text>
          <TextField
            value={data.username}
            name='username'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            id='outlined-basic'
            label='Name'
            variant='outlined'
          />
          <TextField
            value={data.password}
            name='password'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            id='outlined-basic'
            type='password'
            label='Password'
            variant='outlined'
          />

          <StyledButton onClick={() => dispatch(API_POST('/login', data))}>
            Login
          </StyledButton>
        </VerticalItems>
      </FormControl>
    </BodyWithPadding>
  );
};

export default LoginPage;
