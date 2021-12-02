import styled from 'styled-components';

export const Container = styled.div`
	margin: 40px 0;
	h2 {
		text-align: center;
		margin-bottom: 30px;
		color: #4c4c4c;
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 600px;
		margin: auto;
		input, textarea {
			width: 100%;
			margin-bottom: 20px;
			outline: 0;
			padding: 8px 15px;
			font-size: 1rem;
			border-radius: 5px;
			border: 1px solid #ccc;
		}
		textarea {
			height: 250px;
		}
		button {
			padding: 8px 45px;
			outline: 0;
			background-color: #000;
			border: 0;
			border-radius: 5px;
			color: #fff;
			cursor: pointer;
		}
		button: hover {
			background-color: rgba(0,0,0,.9);
		}
	}
	@media (max-width: 600px) {
		form {
			width: 310px;
		}
	}
`;