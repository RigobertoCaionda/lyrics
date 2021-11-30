import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #000;
	width: 700px;
	padding-bottom: 20px;
	.user-desc {
		font-size: 1.3rem;
	}
	a {
		padding: 10px;
		background-color: #000;
		border-radius: 5px;
		color: #fff;
		margin-right: 10px;
	}
	a: last-child {
		margin-right: 0;
	}
	a: hover {
		color: #ccc;
	}
`;