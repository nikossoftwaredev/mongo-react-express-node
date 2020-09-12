import React, { useState } from 'react';
import { Text, BodyWithPadding, VerticalItems } from '../styles/GenericStyled';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LockIcon from '@material-ui/icons/Lock';
import { StyledButton } from '../styles/GenericStyled';
import axios from 'axios';

const RegisterPage = () => {
  const [data, setData] = useState({ name: '', mail: '', password: '' });

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
          <Text align='center'>Register</Text>
          <TextField
            value={data.name}
            name='name'
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
            value={data.mail}
            name='mail'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AlternateEmailIcon />
                </InputAdornment>
              ),
            }}
            id='outlined-basic'
            label='Email'
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

          <StyledButton
            onClick={e => {
              axios
                .post('/register', data)
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
            }}
          >
            Register
          </StyledButton>
        </VerticalItems>
      </FormControl>
    </BodyWithPadding>
  );
};

export default RegisterPage;
