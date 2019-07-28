import React from 'react';

export default (props) => {
    return (
        <div class="card text-dark" >
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                <a href={'/blog' + props.slug} class="btn btn-primary">Read More</a>
            </div>
        </div>
    );
}