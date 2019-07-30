import ReactGA from 'react-ga';

let analyticsCode;

if(process.env.NODE_ENV === 'production') {
    analyticsCode = 'UA-143189358-1';
}

ReactGA.initialize(analyticsCode);
ReactGA.pageview('/');