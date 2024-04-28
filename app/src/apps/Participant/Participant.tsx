import { Heading, Article, PageContainer } from '../../App';
import Chat from '../../components/Chat';
import PopupOpener from '../../components/PopupOpener';

const Participant = () => {
	return (
		<PageContainer>
			<Heading>Participant Page</Heading>
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

export default Participant;
