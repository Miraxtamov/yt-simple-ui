import Body from "../components/body";
import Category from "../components/category";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import "./style"
import { Container } from "./style";

function Root () {
  return (
		<div className="root">
			<Container>
				<Sidebar />
				<Navbar />
				<Category />
				<Body />
			</Container>
		</div>
	);
}

export default Root;
