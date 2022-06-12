import React from "react";

import InputSearch from "../../assets/icon/search-icon.svg";
import VideoUpload from "../../assets/icon/video-upload-icon.svg";
import Apps from "../../assets/icon/apps-icon.svg";
import Notification from "../../assets/icon/notification.svg";
import ProfileImg from "../../assets/img/profile-photo.jpg";
import {
	CategoryBtn,
	CategoryContainer,
	Container,
	NavbarContainer,
	NavbarInput,
	NavbarInputButton,
	NavbarInputButtonSearchIcon,
	NavbarInputContainer,
	NavbarRightContainer,
	NavbarRightImg,
} from "./style";

function Navbar() {
	return (
		<Container>
			<NavbarContainer>
				<NavbarInputContainer>
					<NavbarInput placeholder="Search" type={"search"} />
					<NavbarInputButton>
						<NavbarInputButtonSearchIcon src={InputSearch} />
					</NavbarInputButton>
				</NavbarInputContainer>
				<NavbarRightContainer>
					<NavbarRightImg src={VideoUpload} />
					<NavbarRightImg src={Apps} />
					<NavbarRightImg src={Notification} />
					<NavbarRightImg profileImg width={"32px"} height={"32px"} src={ProfileImg} />
				</NavbarRightContainer>
			</NavbarContainer>
			<CategoryContainer>
				<CategoryBtn>All</CategoryBtn>
				<CategoryBtn>JavaScript</CategoryBtn>
				<CategoryBtn>Football</CategoryBtn>
				<CategoryBtn>Cartoons</CategoryBtn>
				<CategoryBtn>Live</CategoryBtn>
				<CategoryBtn>Cinema</CategoryBtn>
				<CategoryBtn>Mix</CategoryBtn>
				<CategoryBtn>Music</CategoryBtn>
				<CategoryBtn>Sheikh</CategoryBtn>
				<CategoryBtn>Watched</CategoryBtn>
				<CategoryBtn>New to you</CategoryBtn>
			</CategoryContainer>
		</Container>
	);
}

export default Navbar;
