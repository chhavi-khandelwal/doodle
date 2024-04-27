import { Heading } from '../../App';
import Chat from '../../components/Chat';
import PopupOpener from '../../components/PopupOpener';

const Participant = () => {
	return (
		<div>
			<Heading>Participant Page</Heading>
			<PopupOpener>
				<Chat userType='participant' />
			</PopupOpener>
		</div>
	);
};

export default Participant;
