import React from "react"

import thinkImg from '../images/think.png'
import helpImg from '../images/help.png'
import spaceshipImg from '../images/spaceship.png'
import valueImg from '../images/value.jpg'
import Section from '@components/Section'


export default () => (
	<Section color="green">
    <div className="container text-center">
        <div>
            <h2 className="font-weight-bolder">Why?</h2>
        </div>
        <div className="row">
            <div className="col-md-3 col-12 col-sm-6"><img className="img-fluid d-block mx-auto why-img" src={thinkImg} alt="" />
                <h3>Think different</h3>
                <p><span>Why be like the average when we can be </span><b>MORE</b><span>. Suprising people is hard, but is worth it. </span></p>
            </div>
            <div className="col-md-3 col-12 col-sm-6"><img className="img-fluid d-block mx-auto why-img" src={helpImg} alt="" />
                <h3>To help</h3>
                <p>Helping others is not only good for them, it's also something I enjoy. It kind off feels like I'm making the world a better place.
                </p>
            </div>
            <div className="col-md-3 col-12 col-sm-6"> <img className="img-fluid d-block mx-auto why-img" src={spaceshipImg} alt="" />
                <h3>Create</h3>
                <p>The most satisfiying moments are when I get to use my creativity to build things. It gives me some meaning.
                </p>
            </div>
            <div className="col-md-3 col-12 col-sm-6"> <img className="img-fluid d-block mx-auto why-img" src={valueImg} alt="" />
                <h3>Give Value</h3>
                <p>What better feeling than the one you get when something you did is actually useful for something. </p>
            </div>
        </div>
    </div>
</Section>
);
