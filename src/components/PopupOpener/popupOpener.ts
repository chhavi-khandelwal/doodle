import styled from 'styled-components';

export const Container = styled.aside`
	position: relative;
	overflow: hidden;
`;

export const OpenPopupButton = styled.button`
	position: fixed;
	bottom: 0;
	right: 0;
	transform: translateY(-50%);
	background-color: #007bff;
	color: #fff;
	border: none;
	border-radius: 5px 0 0 5px;
	padding: 10px 20px;
	cursor: pointer;
`;

export const ChatContainer = styled.div<{ $isOpen: boolean }>`
	position: fixed;
	top: 20px;
	right: ${(props) => (props.$isOpen ? '0' : '-350px')};
	width: 350px;
	height: calc(100vh - 100px);
	background-color: #fff;
	border: 1px solid #ccc;
	transition: right 0.3s ease;
	box-shadow: ${(props) =>
		props.$isOpen ? '-5px 5px 10px rgba(0, 0, 0, 0.2)' : 'none'};
	border-radius: 20px 0 0 20px;
`;
