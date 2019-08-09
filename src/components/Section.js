import React from 'react';

const colors = {
    default: '#34495E',
    dark: '#2F4254',
    green: '#1ABC9C'
};


export default (props) => {
    const bgColor = colors[props.color] ? colors[props.color] : colors.default;
    
    const style = {
        'backgroundColor': bgColor,
        'padding': '70px 0',
        'color': 'white',
        'borderTop': '8px solid rgba(0,0,0,0.1)',
        'boxShadow': '0px 1px 0px rgba(255,255,255,0.2)'
    };

    return (
        <section style={style}>
            <div id={props.id} className="container">
                {props.children}
            </div>
        </section>
    );
}

