import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Div = styled.div`
display: flex;
gap: 15px;
margin-top: 15px;
padding: 5px;
`;
export const Button = styled.button`
margin-top: 10px;
padding: 5px 10px;
cursor: pointer;
border-radius: 3px;
border: 1px solid #1e81b0;
&:hover, 
 :focus {
    background-color: #e28743;
    border: 1px solid #e28743;
};

`;

export const PosterDiv = styled.div`
max-width: 360px;
`;

export const InfoDiv = styled.div`
padding: 5px;
`;

export const PageLink = styled(NavLink)`
display: block;
text-decoration: none;
margin-top: 10px;
font-size: 20px;
color: #1e81b0;
width: 80px;
&:hover, 
 :focus {
    color: #e28743;
};

&.active {
    color: #e28743;
}

`;

