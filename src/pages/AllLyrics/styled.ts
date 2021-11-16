import styled from 'styled-components';

export const Container = styled.div`
	margin: 40px 0;
	h2 {
		text-align: center;
		margin-bottom: 30px;
	}
	.lyrics-list {
		display: flex;
		align-items: center;
		flex-direction: column;
		.lyric {
			margin-bottom: 20px;
		}
		a {
			margin-right: 10px;
			text-decoration: none;
		}
		a: first-child {
			margin-left: 10px;
		}
	}
`;