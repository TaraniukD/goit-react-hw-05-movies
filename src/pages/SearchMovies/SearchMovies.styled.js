import {DebounceInput} from 'react-debounce-input';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SearchDiv = styled.div`
margin: 15px auto;
max-width: 1200px
`;

export const Form = styled.form`
margin: 15px auto;
`;

export const InputDebounce = styled(DebounceInput)`
padding: 8px 10px;
border-radius: 4px;
min-width: 220px;
`;

export const Button = styled.button`
margin-left: 15px;
padding: 8px 15px;
border: 1px solid #eeeee4;
border-radius: 4px;
cursor: pointer;

&:hover,
 :focus {
    background-color: #eab676;
    border: 1px solid #eab676;
}
`;

export const Ul = styled.ul`
max-width: 1200px;
padding: 0;
`;

export const LinkLi = styled(Link)`
display: flex;
margin-top: 5px;
gap: 10px;
border: 1px solid #eeeee4;
border-radius: 4px;
`;

export const PosterImg = styled.div`
width: 40px;
height: 50px;
`;