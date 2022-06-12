import styled from "styled-components";

export const Container = styled.div`
	position: sticky;
	top: 0;
	width: 295px;
	height: 100vh;
	background-color: #212121;
	overflow: auto;

	::-webkit-scrollbar {
		width: 16px;
	}

	::-webkit-scrollbar-track {
		border-radius: 8px;
	}

	&:hover {
		::-webkit-scrollbar-thumb {
			height: 56px;
			border-radius: 8px;
			border: 4px solid transparent;
			background-clip: content-box;
			background-color: #888;
		}
	}
`;

export const LogoBar = styled.div`
	position: sticky;
	top: 0;
	background-color: #212121;
	z-index: 1;
	display: flex;
	align-items: center;
	padding-top: 20px;
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
	border-bottom: 1px solid rgba(99, 99, 99, 0.5);

	:last-of-type {
		border-bottom: none;
	}
`;

export const SidebarLi = styled.li`
	margin-top: ${(props) => (props.firstLi ? "9px" : "0")};
	margin-top: ${(props) => (props.subsMT ? "8px" : {})};
	margin-bottom: ${(props) => (props.mBB ? "12px" : {})};
	margin-top: ${(props) => (props.mTT ? "12px" : {})};
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
	width: 19px;
	height: 19px;
`;

export const SidebarLiText = styled.div`
	color: #ffffff;
	margin-left: 26px;
	margin-top: 2px;
`;

export const SidebarTitle = styled.div`
	color: rgba(255, 255, 255, 0.6);
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	padding-left: 27px;
	margin-top: 8px;
`;

export const SidebarLiveImg = styled.img`
	width: ${(props) => (props.videoUploadWidth ? "5px" : "13px")};
	height: auto;
	margin-left: auto;
`;
