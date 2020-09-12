import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledLink = styled(Link)`
  font-family: 'Dunkin';
`;

export const HorizontalItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => css`
    & > * {
      margin-left: ${props.margin};
    }
  `}
`;

export const VerticalItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${props => css`
    & > * {
      margin-bottom: ${props.margin};
    }
  `}
`;
export const Text = styled(Typography)`
  font-family: 'Dunkin';
`;

export const StyledButton = styled(Button)`
  background: black;
  color: white;
  padding: 10px 25px;
  border-radius: 27px;
  height: 46px;
  text-transform: none;
  opacity: 1;

  &:hover {
    opacity: 1;
    background: green;
  }
`;

export const BodyWithPadding = styled.div`
  padding: 20px 50px 0px;
  ${props =>
    props.padding &&
    css`
      padding: ${props.padding};
    `};
`;
