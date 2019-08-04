import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';

const Link = styled.a`
    background-color: transparent;
    color: #6c757d;
    border-top: 3px solid;
    border-top-color: #16a08569;
    transition-duration: 0.4s;
    font-size: 20px;
    display: inline-block;
    padding-top: 11px;
    width: 50px;
    height: 50px;
    &:hover {
        border-top-color: #16A085;
        color: white;
    }
`

const brands = ['instagram', 'linkedin', 'github']

export default (props) => {
    
    const isBrand = brands.indexOf(props.icon) !== -1;
    const icon = isBrand ? ['fab', props.icon] : props.icon;

    return (
        <Link className={props.className} href={props.link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icon} />
        </Link>
    );
}