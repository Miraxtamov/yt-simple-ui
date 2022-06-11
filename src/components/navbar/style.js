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
height: 33px;
	border: none;
	outline: none;
	background-color: #121212;
	color: #ffffffe0;
	font-size: 16px;
	line-height: 24px;
	padding: 2px 6px;
`;

export const NavbarInputContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const NavbarInputButton = styled.button`
	background: rgba(255, 255, 255, 0.2);
	border-radius: 0px 2px 2px 0px;
`;

export const NavbarInputButtonSearchIcon = styled.img`
	border: none;
	cursor: pointer;
	padding: 7px 24px;
`;
