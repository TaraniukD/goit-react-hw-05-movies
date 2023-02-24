import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkDiv = styled(NavLink)`
  font-size: 1.5em;
  margin-left: 10px;
  text-decoration: none;
  color: #154c79;

  &.active {
    color: #e28743;
  }
 
`;
