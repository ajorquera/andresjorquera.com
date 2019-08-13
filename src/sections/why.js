import React from "react"

import thinkImg from '../images/think.png'
import helpImg from '../images/healthcare.svg'
import spaceshipImg from '../images/spaceship.png'
import valueImg from '../images/value.jpg'
import Section from '@components/Section'
import { FormattedMessage } from "react-intl";


export default () => (
	<Section color="green">
    <div className="container text-center">
        <div>
            <h2 className="font-weight-bolder text-capitalize">
                <FormattedMessage id="why?" />
            </h2>
        </div>
        <div className="row">
            <div className="col-md-3 col-12 col-sm-6"><img className="img-fluid d-block mx-auto why-img" src={thinkImg} alt="" />
                <h3>
                    <FormattedMessage id="think different" />
                </h3>
                <p><span>
                    <FormattedMessage id="Why be like the average when we can be MORE. Suprising people is hard, but is worth it." />
                </span></p>
            </div>
            <div className="col-md-3 col-12 col-sm-6"><img className="img-fluid d-block mx-auto why-img" src={helpImg} alt="" />
                <h3>
                    <FormattedMessage id="to help" /></h3>
                <p>
                    <FormattedMessage id="Helping others is not only good for them, it's also something I enjoy. It kind off feels like I'm making the world a better place." />
                </p>
            </div>
            <div className="col-md-3 col-12 col-sm-6"> <img className="img-fluid d-block mx-auto why-img" src={spaceshipImg} alt="" />
                <h3>
                    <FormattedMessage id="create" />
                </h3>
                <p>
                    <FormattedMessage id="The most satisfiying moments are when I get to use my creativity to build things. It gives me some meaning." />                    
                </p>
            </div>
            <div className="col-md-3 col-12 col-sm-6"> <img className="img-fluid d-block mx-auto why-img" src={valueImg} alt="" />
                <h3>
                    <FormattedMessage id="give value" />
                </h3>
                <p><FormattedMessage id="What better feeling than the one you get when something you did is actually useful for something."/> </p>
            </div>
        </div>
    </div>
</Section>
);
