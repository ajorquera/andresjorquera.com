import React from 'react';
import styled from 'styled-components'

const colors = {
    default: '#34495E',
    dark: '#2F4254',
    green: '#1ABC9C'
};

export default (props) => {
    const bgColor = colors[props.color] ? colors[props.color] : colors.default;

    const StyledSection = styled.section`
        background-color: ${bgColor};
        padding: 70px 0;
        color: white;
    `;

    return (
        <StyledSection>
            <div id={props.id} className="container">
                {props.children}
            </div>
        </StyledSection>
    );
}

