import styled from 'styled-components';

export  const Container = styled.div`
		input {
			width: 650px;
			padding: 10px;
			border: 1px solid #ccc;
			border-radius: 5px;
			outline: 0;
			font-size: 1rem;
		}
		.wrapper {
			display: flex;
			align-items: center;
			.mic {
				margin-left: -30px;
				cursor: pointer;
			}
		}
		@media (max-width: 600px) {
			& {
				input {
					width: 310px;
				}
			}
		}
`;