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
		input, select {
			width: 100%;
			margin-bottom: 20px;
			outline: 0;
			padding: 8px 15px;
			border-radius: 5px;
			border: 1px solid #ccc;
			font-size: 1rem;
		}
		button {
			padding: 8px 45px;
			outline: 0;
			cursor: pointer;
			border: 0;
			background-color: #000;
			color: #fff;
			border-radius: 5px;
		}
		button: hover {
			background-color: rgba(0,0,0,.9);
		}
	}
`;