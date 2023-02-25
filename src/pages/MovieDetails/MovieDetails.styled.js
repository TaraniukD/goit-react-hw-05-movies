import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Div = styled.div`
display: flex;
gap: 15px;
margin-top: 15px;
padding: 5px;
`

export const PosterDiv = styled.div`
max-width: 360px;
`;

export const PageLink = styled(NavLink)`
display: block;
text-decoration: none;
margin-top: 10px;
font-size: 20px;
color: #1e81b0;
width: 80px;

&: hover, 
 : focus {
    color: #e28743;
};

&.active {
    color: #e28743;
}

`;

