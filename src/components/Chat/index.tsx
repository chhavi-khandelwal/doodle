import { useState } from 'react';
import useWebSocket from '../../hooks/useWebSocket';
import {
	Input,
	InputContainer,
	Button,
	ChatContainer,
	MessageContainer,
	Heading,
	Text,
	TextContainer,
} from './styles';
import { useAuth } from '../../auth/AuthProvider';

const Chat = () => {
	const { user } = useAuth();
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState('');
	const onChatMessageReceived = (msg) => {
		setMessages((prev) => [...prev, msg]);
	};
	const socket = useWebSocket('incoming_message', onChatMessageReceived);

	const handleSendMessage = (e) => {
		e.preventDefault();
		if (!newMessage) return;
		socket.sendMessage({ user: user, text: newMessage });
		setNewMessage('');
	};

	return (
		<ChatContainer>
			<Heading>Chat with other invitees</Heading>
			<MessageContainer>
				{messages.map((msg, index) => (
					<TextContainer key={index}>
						<Text $own={user === msg.user}>
							<h5>{msg.user}</h5>
							{msg.text}
						</Text>
					</TextContainer>
				))}
			</MessageContainer>
			<InputContainer onSubmit={handleSendMessage}>
				<Input
					aria-label='send text'
					value={newMessage}
					onChange={(e) => setNewMessage(e.target.value)}
				/>
				<Button type='submit'>Send</Button>
			</InputContainer>
		</ChatContainer>
	);
};

export default Chat;
