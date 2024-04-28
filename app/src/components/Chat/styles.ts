import { styled } from 'styled-components';
export const Input = styled.textarea`
	padding: 10px;
	border: 1px solid #b7b9bd;
	height: 40px;
	flex: 1;
	border-radius: 10px 0 0 10px;
	resize: none;
	font-size: 14px;
	outline: none;
`;

export const InputContainer = styled.form`
	display: flex;
	bottom: 0;
`;

export const Button = styled.button`
	width: 70px;
	height: 40px;
	border-radius: 0 10px 10px 0;
`;

export const ChatContainer = styled.div`
	height: 100%;
	padding: 0 8px 8px;
	border-radius: 20px 0 0 20px;
`;

export const MessageContainer = styled.div`
	height: calc(100% - 85px);
	overflow: auto;
	scroll-behavior: smooth;
	padding: 4px;
	display: flex;
	flex-direction: column;
`;

export const Heading = styled.div`
	font-size: 1rem;
	font-weight: bolder;
	padding: 8px 2px;
	box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.2);
	margin-bottom: 5px;
`;

export const Text = styled.div<{ $own: boolean }>`
	float: ${({ $own }) => ($own ? 'right' : 'left')};
	background: #eefff1;
	padding: 8px;
	border-radius: 20px;
	margin-top: 4px;
`;

export const TextContainer = styled.div``;
