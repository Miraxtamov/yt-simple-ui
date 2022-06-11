import React from "react";

import InputSearch from "../../assets/icon/search-icon.svg";
import {
	Container,
	NavbarContainer,
	NavbarInput,
	NavbarInputButton,
	NavbarInputButtonSearchIcon,
	NavbarInputContainer
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
			</NavbarContainer>
		</Container>
	);
}

export default Navbar;
