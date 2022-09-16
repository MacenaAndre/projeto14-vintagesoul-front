import { Link } from "react-router-dom";
import Header from "../Header/Header";

export default function Home() {
	return (
		<>
			<Header />
			<Link to={"/sign-in"}>Login</Link>
			<h1>Home</h1>
		</>
	);
}
