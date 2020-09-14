import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import { StyledLink, HorizontalItems } from './styles/GenericStyled';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import OurModal from './components/OurModal';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveHeader, setIsLogged, API_GET } from './actions';

const App = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const dispatch = useDispatch();
  const activeHeader = useSelector(state => state.ui.activeHeader);
  const status = useSelector(state => state.api.testAPI);
  const isLogged = useSelector(state => state.ui.isLogged);

  useEffect(() => {
    dispatch(setActiveHeader('home'));
    dispatch(API_GET('/testAPI'));
  }, []);

  useEffect(() => {
    //making the request to see if the user is authenticated
    console.log(status === 'done');
    dispatch(setIsLogged(status === 'done'));
  }, [status]);
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
        {isLogged ? (
          <StyledLink
            onClick={() => {
              dispatch(API_GET('/logout'));
              dispatch(setIsLogged(false));
              dispatch(setActiveHeader('logout'));
            }}
            style={{ color: `${activeHeader === 'logout' ? 'red' : 'black'}` }}
            to='/logout'
          >
            Logout
          </StyledLink>
        ) : (
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
        )}
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
              <LoginPage setOpen={setOpenLogin} />
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
              <RegisterPage setOpen={setOpenRegister} />
            </OurModal>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
