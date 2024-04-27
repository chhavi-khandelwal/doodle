import { useState, useEffect } from 'react';
import {
	MeetingContainer,
	Meeting,
	Button,
	Container,
	Section,
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
		fetch(`http://localhost:3001/meetings/123`, {
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
				>
					Create new meeting
				</Button>

				<MeetingContainer>
					<Heading>Scheduled Meetings</Heading>
					{meetings.map(({ title, id, url }) => (
						<div key={id}>
							<Meeting
								title={title}
								to={`/meeting/${url}`}
							>
								{title}
							</Meeting>
						</div>
					))}
				</MeetingContainer>
			</Section>
		</Container>
	);
};

export default Home;
