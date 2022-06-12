import Body from "../components/body";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import "./style";
import { Container, Wrapper } from "./style";

function Root() {
	return (
		<div className="root">
			<Container>
				<Sidebar />
				<Wrapper>
					<Navbar />
					<Body />
				</Wrapper>
			</Container>
		</div>
	);
}

export default Root;
