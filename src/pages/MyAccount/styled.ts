import styled from 'styled-components';
export const Container = styled.div`
	width: 600px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 25px auto;
	h1 {
		text-align: center;
	}
	.logout {
		margin-top: 20px;
		button {
			outline: 0;
			padding: 7px 10px;
			border-radius: 5px;
			border: 0;
			background-color: #000;
			color: #fff;
			cursor: pointer;
		}
		button: hover {
			background-color: rgba(0,0,0,.9);
		}
	}
	.fullName {
		margin-top: 20px;
	}
`;