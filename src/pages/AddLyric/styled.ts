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
	}
	button {
		outline: 0;
		padding: 5px 15px;
		cursor: pointer;
	}
	a {
		text-decoration: none;
		margin-top: 20px;
	}
`;