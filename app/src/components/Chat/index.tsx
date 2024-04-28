import { useState } from 'react';
import useRealTimeChannel from '../../hooks/useRealTimeChannel';
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
	const channel = useRealTimeChannel('incoming_message', onChatMessageReceived);

	const handleSendMessage = (e) => {
		e.preventDefault();
		if (!newMessage) return;
		channel.sendMessage({ user: user, text: newMessage });
		setNewMessage('');
	};

	return (
		<ChatContainer
			role='region'
			aria-label='Chat'
		>
			<Heading>Chat with other invitees</Heading>
			<MessageContainer
				role='log'
				aria-label='chat conversation'
			>
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
