import styled from "styled-components";

export const Container = styled.div`
	position: sticky;
	top: 0;
	left: 0;
	width: 240px;
	height: 100vh;
	background-color: #212121;
	overflow: auto;

	::-webkit-scrollbar {
		width: 16px;
	}

	::-webkit-scrollbar-track {
		border-radius: 8px;
	}

	::-webkit-scrollbar-thumb {
		height: 56px;
		border-radius: 8px;
		border: 4px solid transparent;
		background-clip: content-box;
		background-color: #888;
	}
`;

export const LogoBar = styled.div`
	position: sticky;
	top: 0;
	background-color: #212121;
	z-index: 1;
	display: flex;
	align-items: center;
	padding-top: 16px;
	padding-bottom: 16px;
`;

export const SidebarHome = styled.img`
	cursor: pointer;
	margin-left: 24px;
`;

export const LogoLink = styled.a``;

export const Logo = styled.img`
	margin-left: 20px;
`;

export const SidebarContainer = styled.div`
	z-index: 0;
`;

export const SidebarUl = styled.ul`
	display: flex;
	flex-direction: column;
`;

export const SidebarLi = styled.li`
	margin-top: ${(props) => (props.firstLi ? "9px" : "0")};
	margin-top: ${(props) => (props.subsMT ? "8px" : {})};
`;

export const SidebarLink = styled.a`
	display: flex;
	align-items: center;
	padding: 10px 40px 10px 27px;
	font-size: 14px;
	line-height: 20px;

	&:hover {
		background-color: #ffffff22;
	}

	&:focus {
		font-weight: 500;
		background-color: #ffffff33;
	}
`;

export const SidebarIcon = styled.img`
	width: ${(props) => (props.alignRight ? "10px" : "16px")};
	height: ${(props) => (props.alignRight ? "10px" : "16px")};
	margin-left: ${(props) => (props.alignRight ? "auto" : {})};
`;

export const SidebarLiText = styled.div`
	color: #ffffff;
	margin-left: 26px;
	margin-top: 2px;
`;

export const SidebarLine = styled.hr`
	border: 1px solid rgba(255, 255, 255, 0.2);
	margin-top: 12px;
	margin-bottom: ${(props) => (props.mbT ? "8px" : "22px")};
`;

export const SidebarTitle = styled.div`
	color: rgba(255, 255, 255, 0.6);
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	padding-left: 27px;
`;

export const SidebarLive = styled.img`
	/* width: auto;
	height: auto; */
`;
