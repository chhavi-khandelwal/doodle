import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const MeetingContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
export const MeetingLink = styled(Link)``;
export const MeetingList = styled.ul`
	margin-top: 12px;
`;

export const Button = styled.button`
	border: none;
	background: cornflowerblue;
	color: white;
	padding: 12px 24px;
	margin: 8px;
	font-size: 24px;
	border-radius: 8px;
	cursor: pointer;
`;

export const Container = styled.div`
	padding: 40px 20px;
`;

export const Section = styled.section`
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
