import React from 'react'
import ChatBot from 'react-simple-chatbot';
import ReactGA from 'react-ga';
import botFlow from './botFlow';
import styled, { ThemeProvider } from 'styled-components';

let DOMAIN = process.env.DEPLOY_URL || '';

/**
 * TODO: this variable is getting undefined on its string for some reason
 */
DOMAIN = DOMAIN.replace('/undefined', '');

const mainColor = 'rgb(33, 150, 243)';

const theme = {
	background: '#f5f8fb',
	fontFamily: 'Helvetica Neue',
	headerBgColor: mainColor,
	headerFontColor: '#fff',
	headerFontSize: '15px',
	botBubbleColor: mainColor,
	botFontColor: '#fff',
	userBubbleColor: '#fff',
	userFontColor: '#4a4a4a',
}

const size = 64;
const CustomDiv = styled.div`
	.rsc-float-button {
		width: ${size}px;
		height: ${size}px;
	}
`;

export default class Bot extends React.Component {
	constructor(props) {
		super(props);
		this.ref = React.createRef();
		this.state = {
			isOpen: false,
			reset: false
		}

		botFlow[5].trigger = () => {
			this.sendMessage();
			return 'messageSuccess'
		};
	}

	toggleChat(force) {
		const chatbot = this.ref.current;
		chatbot.toggleChatBot(force);
	}

	sendMessage() {
		const url = `${DOMAIN}/.netlify/functions/notifyToSlack`;
		const chatbot = this.ref.current;
		
		const payload = {message: chatbot.state.currentStep.message};
		
		fetch(url, {
			method: 'POST', 
			body: JSON.stringify(payload),
			headers:{
			  'Content-Type': 'application/json'
			}
		})
		ReactGA.event({
			action: 'sendMessage',
			category: 'lead',
			value: 1
		});
	}

	endChat() {
		setTimeout(() => {
			this.toggleChat(false);
			setTimeout(() => {
				this.reset();
			}, 500);
		}, 2000);
	}

	reset() {
		this.setState({reset: true});
		setTimeout(() => {
			this.setState({reset: false})
		}, 0);
	}
	
	render () {
		

		if(this.state.reset) {
			return (<div></div>);
		}

		return (
			

			<ThemeProvider theme={theme}>
				<CustomDiv>
					<ChatBot 
						ref={this.ref}
						floating 
						opened={this.state.open} 
						steps={botFlow} 
						userDelay={700}
						headerTitle="Scrappy - Personal Assistant"
						hideUserAvatar={true}
						handleEnd={this.endChat.bind(this)}
					/>
				</CustomDiv>
			</ThemeProvider>
		);
	}
}
