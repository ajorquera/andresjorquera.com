import React from 'react'
import ChatBot from 'react-simple-chatbot';
import ReactGA from 'react-ga';
import botFlow from './botFlow';

let DOMAIN = process.env.DEPLOY_URL || '';

/**
 * TODO: this variable is getting undefined on its string for some reason
 */
DOMAIN = DOMAIN.replace('/undefined', '');

export default class Bot extends React.Component {
	constructor(props) {
		super(props);
		this.ref = React.createRef();
		this.state = {
			isOpen: false
		}
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
		}, 2500);
	}
	
	render () {
		botFlow[5].trigger = () => {
			this.endChat();
			this.sendMessage();
			return 'messageSuccess'
		};
		return (
			<div>
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
			</div>
		);
	}
}
