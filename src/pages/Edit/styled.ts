import styled from 'styled-components';

export const Container = styled.div`
	margin: 40px 0;
	h2 {
		text-align: center;
		margin-bottom: 30px;
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
			padding: 5px 15px;
		}
		button {
			padding: 5px 15px;
			outline: 0;
			cursor: pointer;
		}
	}
`;