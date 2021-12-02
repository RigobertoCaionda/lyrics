import styled from 'styled-components';

export const Container = styled.div`
	width: 600px;
	padding: 50px 0;
	margin: auto;
	h1 {
		text-align: center;
		color: #4c4c4c;
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		select {
			font-size: 1rem;
			padding: 5px 0;
			outline: 0;
		}
		input {
			font-size: 1rem;
			margin-top: 5px;
			outline: 0;
			padding: 8px;
			border: 1px solid #ccc;
			border-radius: 5px;
		}
		.submitButton {
			padding: 10px 70px;
			cursor: pointer;
			outline: 0;
			border: 0;
			font-size: 1rem;
			border-radius: 5px;
			background-color: #000;
			color: #fff;
		}.submitButton: hover {
			background-color: rgba(0,0,0,.9);
		}
		label {
			display: flex;
			flex-direction: column;
			width: 100%;
			margin-bottom: 10px;
			color: #4c4c4c;
		}
	}
	@media (max-width: 600px) {
		& {
			width: 310px;
		}
	}
`;