import styled from "styled-components";

function WrapperFormSignIn({children}) {
    return (
        <SignIn>
            <Wrapper>
                {children}
            </Wrapper>
        </SignIn>
    );
}; 

const SignIn = styled.div`
    & div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        min-height: 100vh;
        background-color: #FFFFFF;
        padding-top: 80px;
    }
    img {
        height: 150px;
        max-width: 300px;
        width: 100%;
        object-fit: cover;
    }
`;

const Wrapper = styled.div`

    &  input {
        height: 58px;
        width: 90%;
        border-radius: 5px;
        background-color: #FFFFFF;
        border: 1px solid #000000;
        padding-left: 20px;
        margin: 5px 0px;
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        color: #000000;
    }
    input::placeholder {
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        color: #000000;
    }
    input:disabled {
        background-color: lightgray;
        color: #AFAFAF;
    }
    button {
        height: 58px;
        width: 90%;
        border-radius: 5px;
        background-color: #000000;
        border: 1px solid #000000;
        box-shadow: none;
        cursor: pointer;
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        text-align: center;
        color: #FFFFFF;
        margin-top: 5px;
        margin-bottom: 25px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 80px;
            height: 80px;
        }
    }
    button:disabled {
        background-color: #FFFFFF;
        opacity: 0.7;
    }
    a {
        text-decoration: none;
        font-size: 15px;
        font-weight: 700;
        line-height: 18px;
        text-align: center;
        color: #000000;
    }
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 15px;
        width: 100%;
        height: auto;
    }
`;
export {WrapperFormSignIn};