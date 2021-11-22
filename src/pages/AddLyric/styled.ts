import styled from 'styled-components';

export const AddLyricArea = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 700px;
	margin: 50px auto;
	input, textarea {
		width: 100%;
		margin-bottom: 12px;
		padding: 5px;
		outline: 0;
		font-size: 1rem;
	}
	textarea {
		height: 250px;
	}
	button {
		outline: 0;
		padding: 10px 70px;
		cursor: pointer;
		border: 0;
		font-size: 1rem;
		border-radius: 5px;
		background-color: #000;
		color: #fff;
	}
	button: hover {
		background-color: rgba(0,0,0,.9);
	}
`;