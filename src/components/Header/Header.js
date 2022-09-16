import styled from "styled-components";
import { Cart, LogOut } from "react-ionicons";
import { Link, useNavigate } from "react-router-dom";
import { getToken } from "../../service/VintageSoulService";
import logo from "../../assets/img/Vintage Soul Store.jpeg";

export default function Header() {
	const isLogged = getToken();
	const navigate = useNavigate();
	function logout() {
		if (window.confirm("Deseja sair da sua conta?")) {
			window.localStorage.removeItem("VintageSoul");
			navigate("/sign-in");
		}
	}

	return (
		<Wrapper>
			<img src={logo} alt="logo"></img>
			<Menu>
				{isLogged ? (
					<>
						<p>Olá, {isLogged.name}</p>
						<Link to={"/checkout"}>
							<Cart color="white" height="17px" width="17px" />
						</Link>
						<LogOut
							color="white"
							height="17px"
							width="17px"
							onClick={() => logout()}
						/>
					</>
				) : (
					<>
						<Link to={"/sign-in"}>
							<p>Entrar</p>
						</Link>
						<Link to={"/sign-up"}>
							<p>Cadastre-se</p>
						</Link>
					</>
				)}
			</Menu>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 70px;
	background-color: black;
	color: white;
	padding: 15px;
	img {
		height: 100%;
	}
	p {
		color: white;
		font-size: 14px;
		font-weight: 700;
	}
`;
const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 150px;
`;
