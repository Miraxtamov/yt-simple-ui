import styled from "styled-components";

export const Container = styled.div`
	position: sticky;
	top: 0;
	background-color: #212121;
	padding-top: 12px;
	padding-bottom: 12px;
`;

export const NavbarContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const NavbarInput = styled.input`
	width: 574px;
	height: 33px;
	border: none;
	outline: none;
	background-color: #121212;
	color: hsla(0, 100%, 100%, 0.88);
	font-size: 16px;
	line-height: 24px;
	padding: 2px 6px;
	border: 1px solid hsl(0, 0%, 18.82%);
	border-radius: 2px 0;
	border-right: none;
	box-shadow: inset 0 1px 2px hsla(0, 0%, 0%, 0);

	&:focus {
		border: 1.1px solid #1c62b9;
  box-shadow: inset 0 1px 2px rgba(0,0,0,.4);la(0, 0%, 0%, 0), 0 0 0 1px hsla(0, 0%, 0%, 0.12);
	}
`;

export const NavbarInputContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: auto;
`;

export const NavbarInputButton = styled.button`
	border: none;
	background: rgba(255, 255, 255, 0.2);
	padding: 6px 24px;
	cursor: pointer;
	border-radius: 0px 2px 2px 0px;
`;

export const NavbarInputButtonSearchIcon = styled.img``;

export const NavbarRightContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: auto;
	padding-right: 20px;
`;

export const NavbarRightImg = styled.img`
	margin-right: 26px;
	cursor: pointer;
`;

export const NavbarLine = styled.hr`
	border: 1px solid rgba(255, 255, 255, 0.2);
`;
