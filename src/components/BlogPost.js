import React from 'react';

export default (props) => {
    return (
        <div className="card text-dark" >
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={'/blog' + props.slug} className="btn btn-primary">Read More</a>
            </div>
        </div>
    );
}