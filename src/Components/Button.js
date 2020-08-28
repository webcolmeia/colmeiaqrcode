import styled from 'styled-components';
import { Link } from 'react-router-dom';

const buttonColors = {
    primary : '#333'
}

export const Button = styled(Link)`
    padding: 10px 20px;
    background-color: ${
        props => {
            let color;
            color = props.bg === 'primary' ? buttonColors.primary : buttonColors.primary;
            return color;
        }
    };
    border-radius: 5px;
    margin: 5px;
    color: #fff;
    text-decoration: none;
    display: inline-flex;
`;