import styled from 'styled-components';

export const HeaderArea = styled.header`
	padding: 0 100px;
	background-color: rgba(0,0,0,.7);
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	a {
		color: #fff;
		text-decoration: none;
		margin-right: 10px;
	}
	a: hover {
		color: red;
	}
	.logoArea {
		color: #fff;
		font-size: 1.4rem;
	}
`;