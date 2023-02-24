import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DivContainer = styled.div`
padding: 0 10px;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px 1px;
`;

export const H1 = styled.h1`
text-align: center;
`;

export const Div = styled.div`
width: 50px;
height: 50px;
`;

export const Li = styled.li`
margin-top: 5px;

`;

export const LinkLi = styled(Link)`
display: flex;
align-items: center;
gap: 15px;
text-decoration: none;
color: #154c79;
&:hover, 
:focus {
    color: blue;
}
line-height: 1.1;
font-size: 20px;
`;