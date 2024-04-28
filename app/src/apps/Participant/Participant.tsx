import { Heading, Article } from '../../App';
import Chat from '../../components/Chat';
import PopupOpener from '../../components/PopupOpener';

const Participant = () => {
	return (
		<div>
			<Heading>Participant Page</Heading>
			<Article>
				Calendar and other details about the meeting come in here.
				<br />
				To chat click on the button in the right corner.
			</Article>
			<PopupOpener>
				<Chat />
			</PopupOpener>
		</div>
	);
};

export default Participant;
