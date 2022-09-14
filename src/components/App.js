import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";

export default function App () {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn/>}></Route>
                    <Route path="/sign-in" element={<SignIn/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
};