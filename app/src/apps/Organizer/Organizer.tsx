import { Article, Heading, PageContainer } from '../../App';
import Chat from '../../components/Chat';
import PopupOpener from '../../components/PopupOpener';

const Organizer = () => {
	return (
		<PageContainer>
			<Heading>Organizer App</Heading>
			<Article>
				Calendar and other details about the meeting come in here.
				<br />
				To chat click on the button in the right corner.
			</Article>
			<PopupOpener>
				<Chat />
			</PopupOpener>
		</PageContainer>
	);
};

export default Organizer;
