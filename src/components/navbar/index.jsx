import React from "react";

import InputSearch from "../../assets/icon/search-icon.svg";
import VideoUpload from "../../assets/icon/video-upload-icon.svg"
import Apps from "../../assets/icon/apps-icon.svg"
import Notification from "../../assets/icon/notification.svg"
import ProfileImg from "../../assets/img/profile-photo.png"
import {
	Container,
	NavbarContainer,
	NavbarInput,
	NavbarInputButton,
	NavbarInputButtonSearchIcon,
	NavbarInputContainer,
	NavbarLine,
	NavbarRightContainer,
	NavbarRightImg
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
					<NavbarRightImg src={VideoUpload}/>
					<NavbarRightImg src={Apps}/>
					<NavbarRightImg src={Notification}/>
					<NavbarRightImg width={"32px"} height={"32px"} src={ProfileImg}/>
				</NavbarRightContainer>
				<NavbarLine/>
			</NavbarContainer>
		</Container>
	);
}

export default Navbar;
