import { useState, useEffect } from 'react';
import {
	MeetingContainer,
	MeetingLink,
	Button,
	Container,
	Section,
	MeetingList,
} from './styles';
import { useAuth } from '../../auth/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../../App';

const Home = () => {
	const [meetings, setMeetings] = useState([]);
	const { user, token } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!token) {
			navigate('/');
		}
	}, [token]);

	const generateMeeting = () => {
		//send POST request and meeting is generated
	};

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/meetings/meeting1`, {
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then(({ meetings }) => setMeetings(meetings))
			.catch((error) => console.error(error));
	});

	return (
		<Container>
			<Heading>Welcome {user}!</Heading>
			<Section>
				<Button
					type='button'
					onClick={generateMeeting}
					aria-label='create new meeting'
				>
					Create new meeting
				</Button>

				<MeetingContainer>
					<Heading>Scheduled Meetings</Heading>
					<MeetingList aria-label='meeting list'>
						{meetings.map(({ title, id, url }) => (
							<li key={id}>
								<MeetingLink
									title={title}
									to={`/meeting/${url}`}
								>
									{title}
								</MeetingLink>
							</li>
						))}
					</MeetingList>
				</MeetingContainer>
			</Section>
		</Container>
	);
};

export default Home;
