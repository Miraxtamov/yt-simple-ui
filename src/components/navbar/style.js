import styled from "styled-components";

export const Container = styled.div`
	position: sticky;
	top: 0;
	background-color: #202020;
	padding-top: 12px;
`;

export const NavbarContainer = styled.div`
	display: flex;
	align-items: center;
	padding-bottom: 12px;
	border-bottom: 1px solid rgba(99, 99, 99, 0.5);
`;

export const NavbarInputContainer = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid hsl(0, 0%, 18.82%);
	margin-left: auto;
	border-radius: 2px 2px;
	border-right: none;
`;

export const NavbarInput = styled.input`
	width: 574px;
	height: 37px;
	border: none;
	outline: none;
	background-color: #121212;
	color: hsla(0, 100%, 100%, 0.88);
	font-size: 16px;
	line-height: 24px;
	padding: 2px 6px;
	box-shadow: inset 0 1px 2px  hsla(0, 0%, 0%, 0);
	border: 1px solid transparent;

	&:focus {
		border: 1.1px solid #1c62b9;
  	box-shadow: inset 0 1px 2px rgba(0,0,0,.4);la(0, 0%, 0%, 0), 0 0 0 1px hsla(0, 0%, 0%, 0.12);
	}
`;

export const NavbarInputButton = styled.button`
	border: none;
	background: rgba(255, 255, 255, 0.2);
	padding: 8px 24px;
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
	border-radius: ${props => props.profileImg ? "50%" : "0"};
`;

// Category
export const CategoryContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	padding-top: 13px;
	padding-bottom: 13px;
	border-bottom: 1px solid rgba(99, 99, 99, 0.5);
`;

export const CategoryBtn = styled.button`
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	padding: 5px 12px;
	color: #ffffff;
	background-color: rgba(255, 255, 255, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 30px;
	cursor: pointer;
	margin-left: 12px;
	transition: background-color 0.5s cubic-bezier(0.05, 0, 0, 1);

	:first-of-type {
		margin-left: 0;
	}

	&:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}

	&:focus {
		background: rgba(255, 255, 255);
		color: #212121;
	}
`;
