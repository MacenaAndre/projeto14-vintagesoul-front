import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import { GlobalStyle } from "./styled-components";
import Checkout from "./Checkout/Checkout";

export default function App () {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/sign-in" element={<SignIn/>}></Route>
                    <Route path="/sign-up" element={<SignUp/>}></Route>
                    <Route path="/checkout" element={<Checkout/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
};