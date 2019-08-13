import React from 'react';
import jonathanImg from '../images/jonathan.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const headerStyle = {
    'height': '70px'
};

const headerStyleFloat = {
    'backgroundColor': '#2C3E50',
    'borderBottom':'8px solid rgba(0,0,0,0.1)'
};

const nameStyle = {
    color: '#16A085',
    fontFamily: 'Montserrat',
    fontSize: '24px'
}
const navStyle = {
    fontFamily: 'Alegreya Sans SC',
    fontSize: '20px',
    color: 'white'
}



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

    handleScroll() {
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
            <Navbar variant="dark" fixed="top" className="d-none d-md-flex py-5" style={style}>
                <div className="container">
                    {
                        !this.state.isPageTop &&
                        (<Navbar.Brand className="d-none d-md-inline" href="/">
                            <img src={jonathanImg} width="50" className="navbar-logo pull-left" alt="avatar" />
                            <span style={nameStyle} className="ml-3">{name}</span>
                        </Navbar.Brand>)
                    }

                    
                    <Navbar.Toggle aria-controls="basic-Navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="ml-auto text-uppercase" style={navStyle}>
                            {this.props.links.map((link, i) => (
                                <Nav.Link key={i} href={link.href}>
                                    {link.label}                                
                                </Nav.Link>
                            ))}

                            {}
                            <NavDropdown title={<FontAwesomeIcon icon="globe" />} id="basic-nav-dropdown">
                                {this.props.langs.map((lang, i) => (
                                    <NavDropdown.Item key={i} onClick={this.props.onClickLang.bind(this, lang)}>
                                        {lang.label}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}