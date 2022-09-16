import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<Link to={"/sign-in"}>Login</Link>
			<h1>Home</h1>
		</>
	);
}
