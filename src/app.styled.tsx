import styled from 'styled-components';

export const ErrorMessage = styled.div`
	margin:10px 0;
	background-color:#ffcaca;
	color:#000;
	border:2px solid #ff0000;
	padding:10px;
	width: 685px;
	@media (max-width: 600px) {
		& {
			width: 310px;
		}
	}
`;

export const SuccessMessage = styled.div`
	margin:10px 0;
	background-color:green;
	color:#fff;
	border:2px solid #ccc;
	padding:10px;
`;