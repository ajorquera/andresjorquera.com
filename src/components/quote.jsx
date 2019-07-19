import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
	<section class="custom-section custom-quote">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-7 offset-md-4">
                <blockquote class="blockquote-reverse text-center">
                    <p>
                        <FontAwesomeIcon icon="quote-left"/>
                        &nbsp;People don't buy what you do. They buy why you do it
                    </p>
                    <footer class="text-right"> Simon Sinek</footer>
                </blockquote>
            </div>
        </div>
    </div>
</section>
);
