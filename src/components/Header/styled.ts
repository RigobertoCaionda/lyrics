import styled from 'styled-components';

export const HeaderArea = styled.header`
	padding: 0 100px;
	background-color: rgba(0,0,0,.7);
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.menuIcon {
		display: none;
		position: absolute;
		right: 10px;
		cursor: pointer;
	}
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
	@media (max-width: 600px) {
		& {
			padding: 10px 20px;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			min-height: 210px;
			.menuIcon {
				display: block;
				z-index: 2;
			}
		}
	}
`;

export const MenuArea = styled.div<{open: boolean}>`
	@media (max-width: 600px) {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 40%;
			text-align: center;
			background-color: #aaa;
			margin-top: ${props=> props.open ? '0px' : '-250px'};
			transition: all ease-in 0.5s;
			position: absolute;
			top: 0;
			left: 0;
			a {
				padding: 4px 7px;
			}
	}
`;