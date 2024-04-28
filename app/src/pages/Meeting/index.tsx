import { useState, useEffect } from 'react';
import Organizer from '../../apps/Organizer/Organizer';
import Participant from '../../apps/Participant/Participant';
import { useAuth } from '../../auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Meeting = () => {
	const [isOrganizer, setIsOrganizer] = useState(false);
	const [participants, setParticipants] = useState([]);
	const { token } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!token) {
			navigate('/');
		}
	}, [token]);
	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/meetings/meeting1/participants`, {
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then(({ participants: listedParticipants }) => {
				setParticipants(listedParticipants);
				const participant = participants.find(({ id }) => id === token);
				if (participant) {
					setIsOrganizer(participant.isOrganizer);
				}
			})
			.catch((error) => console.error(error));
	});
	return isOrganizer ? <Organizer /> : <Participant />;
};

export default Meeting;
