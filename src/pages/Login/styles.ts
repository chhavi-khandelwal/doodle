import { styled } from 'styled-components';

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const TitleContainer = styled.h3`
	display: flex;
	flex-direction: column;
	font-size: 3em;
	font-weight: bolder;
	align-items: center;
	justify-content: center;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`;

export const Label = styled.label`
	font-size: 12px;
	font-weight: bold;
	margin: 5px 0;
`;

export const SubmitButton = styled.button`
	border: none;
	background: cornflowerblue;
	color: white;
	padding: 8px 12px;
	border-radius: 8px;
	cursor: pointer;
	margin: 12px auto;
`;

export const Input = styled.input`
	height: 38px;
	width: 100%;
	font-size: 1em;
	border-radius: 8px;
	border: 1px solid grey;
	padding-left: 8px;
`;

export const Error = styled.span`
	color: red;
	font-size: 12px;
`;
