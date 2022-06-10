import React from "react";
import hamburgerBtn from "../../assets/icon/hamburgerBtn.svg";
import LogoHome from "../../assets/icon/logo.svg";
import SidebarHomeIcon from "../../assets/icon/home.svg";
import SidebarExploreIcon from "../../assets/icon/explore.svg";
import SidebarSubscriptionsIcon from "../../assets/icon/subscriptions.svg";
import SidebarLibraryIcon from "../../assets/icon/library.svg";
import SidebarHistoryIcon from "../../assets/icon/history.svg";
import SidebarYourVideosIcon from "../../assets/icon/your-videos.svg";
import SidebarWatchLaterIcon from "../../assets/icon/watch-later.svg";
import SidebarLikedIcon from "../../assets/icon/liked.svg";
import SidebarLive from "../../assets/icon/live.svg";
import SidebarVideoUploaded from "../../assets/icon/video-uploaded.svg";
import SidebarArrowIcon from "../../assets/icon/arrow.svg";
import Avatar1 from "../../assets/img/AvatarPhoto1.png";
import Avatar2 from "../../assets/img/AvatarPhoto2.png";
import Avatar3 from "../../assets/img/AvatarPhoto3.png";
import Avatar4 from "../../assets/img/AvatarPhoto4.png";
import Avatar5 from "../../assets/img/AvatarPhoto5.png";
import {
	Container,
	Logo,
	LogoBar,
	LogoLink,
	SidebarContainer,
	SidebarHome,
	SidebarIcon,
	SidebarLi,
	SidebarLine,
	SidebarLink,
	SidebarLiText,
	SidebarTitle,
	SidebarUl,
	SidebarLiveImg,
} from "./style";

function Sidebar() {
	return (
		<Container>
			<LogoBar>
				<SidebarHome src={hamburgerBtn} />
				<LogoLink href="#">
					<Logo title="YouTube Home" src={LogoHome} />
				</LogoLink>
			</LogoBar>
			<SidebarContainer>
				<SidebarUl>
					<SidebarLi firstLi>
						<SidebarLink title="Home" href="#">
							<SidebarIcon src={SidebarHomeIcon} alt="Home" />
							<SidebarLiText>Home</SidebarLiText>
						</SidebarLink>
					</SidebarLi>
					<SidebarLi>
						<SidebarLink title="Explore" href="#">
							<SidebarIcon src={SidebarExploreIcon} alt="Explore" />
							<SidebarLiText>Explore</SidebarLiText>
						</SidebarLink>
					</SidebarLi>
					<SidebarLi>
						<SidebarLink title="Subscriptions" href="#">
							<SidebarIcon src={SidebarSubscriptionsIcon} alt="Subscriptions" />
							<SidebarLiText>Subscriptions</SidebarLiText>
						</SidebarLink>
					</SidebarLi>
				</SidebarUl>
				<SidebarLine />
				<SidebarUl>
					<SidebarLi>
						<SidebarLink title="Library" href="#">
							<SidebarIcon src={SidebarLibraryIcon} alt="Library" />
							<SidebarLiText>Library</SidebarLiText>
						</SidebarLink>
					</SidebarLi>
					<SidebarLi>
						<SidebarLink title="History" href="#">
							<SidebarIcon src={SidebarHistoryIcon} alt="History" />
							<SidebarLiText>History</SidebarLiText>
						</SidebarLink>
					</SidebarLi>
					<SidebarLi>
						<SidebarLink title="Your videos" href="#">
							<SidebarIcon src={SidebarYourVideosIcon} alt="Your videos" />
							<SidebarLiText>Your videos</SidebarLiText>
						</SidebarLink>
					</SidebarLi>
					<SidebarLi>
						<SidebarLink title="Watch Later" href="#">
							<SidebarIcon src={SidebarWatchLaterIcon} alt="Watch Later" />
							<SidebarLiText>Watch Later</SidebarLiText>
						</SidebarLink>
					</SidebarLi>
					<SidebarLi>
						<SidebarLink title="Liked Videos" href="#">
							<SidebarIcon src={SidebarLikedIcon} alt="Liked Videos" />
							<SidebarLiText>Liked Videos</SidebarLiText>
						</SidebarLink>
					</SidebarLi>
					<SidebarLi>
						<SidebarLink title="Show more" href="#">
							<SidebarIcon src={SidebarArrowIcon} alt="Show more" />
							<SidebarLiText>Show more</SidebarLiText>
						</SidebarLink>
					</SidebarLi>
				</SidebarUl>
				<SidebarLine mbT />
				<SidebarTitle>SUBSCRIPTIONS</SidebarTitle>
				<SidebarUl>
					<SidebarLi subsMT>
						<SidebarLink title="The Game" href="#">
							<SidebarIcon src={Avatar1} alt="The Game" />
							<SidebarLiText>The Game</SidebarLiText>
							<SidebarLiveImg  src={SidebarLive} alt="The Game" />
						</SidebarLink>
					</SidebarLi>
					<SidebarLi>
						<SidebarLink title="Dev Ed" href="#">
							<SidebarIcon src={Avatar2} alt="Dev Ed" />
							<SidebarLiText>Dev Ed</SidebarLiText>
							<SidebarLiveImg
								videoUploadWidth
								src={SidebarVideoUploaded}
								alt="The Game"
							/>
						</SidebarLink>
					</SidebarLi>
					<SidebarLi>
						<SidebarLink title="Dani Krossing" href="#">
							<SidebarIcon src={Avatar3} alt="Dani Krossing" />
							<SidebarLiText>Dani Krossing</SidebarLiText>
							<SidebarLiveImg
								videoUploadWidth
								src={SidebarVideoUploaded}
								alt="The Game"
							/>
						</SidebarLink>
					</SidebarLi>
					<SidebarLi>
						<SidebarLink title="CodingNepal" href="#">
							<SidebarIcon src={Avatar4} alt="CodingNepal" />
							<SidebarLiText>CodingNepal</SidebarLiText>
							<SidebarLiveImg
								videoUploadWidth
								src={SidebarVideoUploaded}
								alt="The Game"
							/>
						</SidebarLink>
					</SidebarLi>
					<SidebarLi>
						<SidebarLink title="Bedimcode" href="#">
							<SidebarIcon src={Avatar5} alt="Bedimcode" />
							<SidebarLiText>Bedimcode</SidebarLiText>
							<SidebarLiveImg src={SidebarLive} alt="The Game" />
						</SidebarLink>
					</SidebarLi>
					<SidebarLi>
						<SidebarLink title="Show more" href="#">
							<SidebarIcon src={SidebarArrowIcon} alt="Show more" />
							<SidebarLiText>Show more</SidebarLiText>
						</SidebarLink>
					</SidebarLi>
				</SidebarUl>
				<SidebarLine mbT />
				<SidebarTitle>MORE FROM YOUTUBE</SidebarTitle>
				<SidebarUl>
					<SidebarLi>
						<SidebarLink title="YouTube Premium" href="#">
							<SidebarIcon src={SidebarExploreIcon} alt="YouTube Premium" />
							<SidebarLiText>YouTube Premium</SidebarLiText>
						</SidebarLink>
					</SidebarLi>
				</SidebarUl>
			</SidebarContainer>
		</Container>
	);
}

export default Sidebar;
