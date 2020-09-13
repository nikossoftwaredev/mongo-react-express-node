import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import { StyledLink, HorizontalItems } from './styles/GenericStyled';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import OurModal from './components/OurModal';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveHeader } from './actions';

const App = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const dispatch = useDispatch();
  const activeHeader = useSelector(state => state.ui.activeHeader);

  useEffect(() => {
    dispatch(setActiveHeader('home'));
  }, []);
  return (
    <Router>
      <HorizontalItems margin='10px'>
        <StyledLink
          style={{ color: `${activeHeader === 'home' ? 'red' : 'black'}` }}
          to='/'
          onClick={() => dispatch(setActiveHeader('home'))}
        >
          Home
        </StyledLink>
        <StyledLink
          style={{ color: `${activeHeader === 'login' ? 'red' : 'black'}` }}
          to='/login'
          onClick={() => {
            setOpenLogin(true);
            dispatch(setActiveHeader('login'));
          }}
        >
          Login
        </StyledLink>
        <StyledLink
          style={{ color: `${activeHeader === 'register' ? 'red' : 'black'}` }}
          to='/register'
          onClick={() => {
            setOpenRegister(true);
            dispatch(setActiveHeader('register'));
          }}
        >
          Register
        </StyledLink>
      </HorizontalItems>
      <Switch>
        <Route path='/' exact render={() => <HomePage />} />
        <Route
          path='/login'
          exact
          render={() => (
            <OurModal
              open={openLogin}
              setOpen={setOpenLogin}
              width='50%'
              height='50%'
              minWidth='200px'
            >
              <LoginPage />
            </OurModal>
          )}
        />
        <Route
          path='/register'
          exact
          render={() => (
            <OurModal
              open={openRegister}
              setOpen={setOpenRegister}
              width='50%'
              height='50%'
              minWidth='200px'
            >
              <RegisterPage />
            </OurModal>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
