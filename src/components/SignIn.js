import { useState } from "react";
import { Link } from "react-router-dom";
import { WrapperFormSignIn } from "./styled-components";
import spinner from "../assets/img/spinner.gif"
import logo from "../assets/img/Vintage Soul Store.png"

export default function SignIn() {

    const [emailSignIn, setEmailSignIn] = useState("");
    const [passwordSignIn, setPasswordSignIn] = useState("");
    const [buttonSignIn, setButtonSignIn] = useState(false);

    function SignInConecction(e) {
        e.preventDefault();
    };


    return (
        <>
            <WrapperFormSignIn>
                <img src={logo} alt="logo"></img>
                <form onSubmit={SignInConecction}>
                    <input
                        placeholder="E-mail"
                        type="email"
                        onChange={(e) => setEmailSignIn(e.target.value)}
                        value={emailSignIn}
                        disabled={buttonSignIn}
                        required
                        ></input>
                    <input
                        placeholder="Senha"
                        type="password"
                        onChange={(e) => setPasswordSignIn(e.target.value)}
                        value={passwordSignIn}
                        disabled={buttonSignIn}
                        required
                        ></input>
                    {!buttonSignIn ? <button>Entrar</button> : <button disabled={buttonSignIn}><img src={spinner} alt="spinner"></img></button> }
                </form>
                <Link to="/register">Primeira Vez? Cadastre-se!</Link>
            </WrapperFormSignIn>
        </>
    )
};