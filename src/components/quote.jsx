import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
	<section className="custom-section custom-quote">
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-7 offset-md-4">
                <blockquote className="blockquote-reverse text-center">
                    <p>
                        <FontAwesomeIcon icon="quote-left"/>
                        &nbsp;People don't buy what you do. They buy why you do it
                    </p>
                    <footer className="text-right"> Simon Sinek</footer>
                </blockquote>
            </div>
        </div>
    </div>
</section>
);
