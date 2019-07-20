import React from 'react'
import ChatBot from 'react-simple-chatbot';
import ReactGA from 'react-ga';

const DOMAIN = process.env.DEPLOY_URL;
const steps = [
  {
    id: 'botInfo',
    message: 'Hi, my name is Scrappy and I\'m Mr Andres assistant. Mr Andres is still working on me so please cut me some slack',
    trigger: 'optionsMsg',
  },
  {
	id: 'optionsMsg',
	message: 'These are the options available: ',
	trigger: 'options'
  },
  {
	  id: 'options',
	  options: [
		  {value: 3, label: 'Tell him to contact me', trigger: 'leavePhone'},
		  {value: 5, label: 'Leave him a message', trigger: 'leaveMessage'},
		  {value: 6, label: 'Who are you again?', trigger: 'botInfo'},
		  {value: 7, label: 'Leave me alone', trigger: 'exit'},
	  ]
  }, {
	  id: 'leavePhone',
	  message: 'Please give me your name, phone number or email so I can forward it to Mr Andres',
	  trigger: 'message'
  }, {
	  id: 'leaveMessage',
	  message: 'You can leave any message to Mr. Andres. Be polite ^^',
	  trigger: 'message'
  }, {
	  id: 'message',
	  user: true,
  }, {
	  id: 'messageSuccess',
	  message: 'Thanks. Ill make sure my boss gets your message',
	  trigger: 'areYouFinish'
  }, {
	  id: 'areYouFinish',
	  delay: 3000,
	  message: 'Do you need more help?',
	  trigger: 'optionsAreYouFinish'
  }, {
	  id: 'optionsAreYouFinish',
	  options: [
		{value: 6, label: 'Yes', trigger: 'optionsMsg'},
		{value: 7, label: 'No', trigger: 'exit'},
	  ]
  }, {
	  id: 'exit',
	  end: true,
	  message: 'Goodbye. If you need me again you know where to find me :)'
  },
];

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
		
		const promise = fetch(url, {
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
		const chatbot = this.ref.current;
		
		setTimeout(() => {
			this.toggleChat(false);
		}, 2500);
	}
	
	render () {
		steps[5].trigger = () => {
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
					steps={steps} 
					userDelay={700}
					headerTitle="Scrappy - Personal Assistant"
					hideUserAvatar={true}
					handleEnd={this.endChat.bind(this)}
				/>
			</div>
		);
	}
}
