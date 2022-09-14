import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import { GlobalStyle } from "./styled-components";

export default function App () {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn/>}></Route>
                    <Route path="/sign-in" element={<SignIn/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
};