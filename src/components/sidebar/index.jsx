import React from "react";
import hamburgerBtn from "../../assets/icon/hamburgerBtn.svg";
import LogoHome from "../../assets/icon/logo.svg";
import { Container, Logo, LogoBar, LogoLink, SidebarContainer, SidebarHome } from "./style";

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
        
      </SidebarContainer>
		</Container>
	);
}

export default Sidebar;
