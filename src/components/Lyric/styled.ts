import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #000;
	width: 700px;
	padding-bottom: 20px;
	.lyric-desc {
		font-size: 1.3rem;
		color: #4c4c4c;
	}
	a {
		padding: 10px;
		background-color: #000;
		border-radius: 5px;
		color: #fff;
	}
	a: hover {
		color: #ccc;
	}
	@media (max-width: 600px) {
		& {
			width: 310px;
			align-items: flex-end;
		}
	}
`;