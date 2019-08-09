import React from 'react';
import jonathanImg from '../images/jonathan.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const headerStyle = {
    'height': '70px'
};

const headerStyleFloat = {
    'background-color': '#2C3E50',
    'border-bottom':'8px solid rgba(0,0,0,0.1)'
};

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPageTop: true,
            scrollLimit: 20
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
        this.handleScroll();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true);
    }

    handleScroll(event) {
        const scrollOffset = window.pageYOffset;

        let isPageTop = this.state.isPageTop;

        isPageTop = scrollOffset < this.state.scrollLimit;

        if(isPageTop !== this.state.isPageTop) {
            this.setState({isPageTop});
        }
    }
 
    render() {
        const name = this.props.name;

        let style = {...headerStyle};

        if(!this.state.isPageTop) {
            style = {...style, ...headerStyleFloat}
        }

        return (
            <Navbar variant="dark" fixed="top" className="d-none d-md-flex" style={style}>
                <div className="container">
                    {
                        !this.state.isPageTop &&
                        (<Navbar.Brand className="d-none d-md-inline" href="/">
                            <img src={jonathanImg} width="50" className="navbar-logo pull-left" alt="avatar" />
                        </Navbar.Brand>)
                    }
                    <span className="navbar-brand">{name}</span>
                    
                    <Navbar.Toggle aria-controls="basic-Navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="ml-auto">
                            <Nav.Link href="/#services">Services</Nav.Link>
                            <Nav.Link href="/#about">About me</Nav.Link>
                            <Nav.Link href="/#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}