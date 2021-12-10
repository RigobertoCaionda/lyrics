import styled from 'styled-components';
export const Container = styled.div`
	width: 600px;
	min-height: 72vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 25px auto;
	h1 {
		text-align: center;
		color: #4c4c4c;
		margin-top: 30px;
	}
	.logout {
		margin-top: 20px;
		button {
			outline: 0;
			padding: 10px;
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
	.fullName, .permission {
		margin: 20px 0;
		font-size: 1.4rem;
		color: #4c4c4c;
	},
	.permission {
		margin-top: 0;
	}
	.add_adm {
		background-color: #000;
		padding: 10px;
		border-radius: 5px;
		margin-bottom: 25px;
		a {
			color: #fff;
			text-decoration: none;
		}
	}
	.add_adm: hover {
		background-color: rgba(0,0,0,.9);
	}
	.usersList {
		h2 {
			text-align: center;
			color: #4c4c4c;
			margin-bottom: 60px;
		}
	}
	@media (max-width: 600px) {
		& {
			width: 310px;
		}
	}
`;