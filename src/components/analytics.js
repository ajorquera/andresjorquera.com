import ReactGA from 'react-ga';

ReactGA.initialize('UA-143189358-1');
ReactGA.pageview(window.location.pathname + window.location.search);