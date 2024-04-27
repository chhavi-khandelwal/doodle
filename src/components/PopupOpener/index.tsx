import { useState } from 'react';
import { ChatContainer, Container, OpenPopupButton } from './popupOpener';

const PopupOpener = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Container>
			<ChatContainer $isOpen={isOpen}>{children}</ChatContainer>
			<OpenPopupButton onClick={togglePopup}>{`${
				isOpen ? 'Close' : 'Open'
			} Chat`}</OpenPopupButton>
		</Container>
	);
};

export default PopupOpener;
