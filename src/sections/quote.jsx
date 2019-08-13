import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Section from '@components/Section';

export default (props) => (
	<Section>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 offset-md-4">
                    <blockquote className="blockquote-reverse text-center">
                        <p>
                            <FontAwesomeIcon icon="quote-left"/>
                            &nbsp;
                            {props.quote}
                        </p>
                        <footer className="text-right"> {props.author} --</footer>
                    </blockquote>
                </div>
            </div>
        </div>
    </Section>
);
