import "./login.css"
import { type FormEvent, useState} from "react";

import {loginEmailPassword, loginWithGithub, loginWithGoogle} from "../../services/firebaseActions.ts";


export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await loginEmailPassword(email, password, rememberMe);
    }

    return (
        <div className="login-page">
            <div className="image-container">
                <img src="/login_image.svg" alt="Login Page"/>
            </div>

            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <img src="/email.svg" alt="Email"/>
                        <input type="email" required placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="input-container">
                        <img src="/password.svg" alt="Password"/>
                        <input type="password" required placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="checkbox-forgotpass-container">
                        <div className="checkbox-container">
                            <input type="checkbox" onChange={() => setRememberMe(!rememberMe)}/>
                            <span>Remember Me</span>
                        </div>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit">Sign-In</button>
                    <hr/>
                </form>


                <span className="text-opt-login">Or Continue With</span>

                <div className="social-login">
                    <button onClick={() => loginWithGoogle(rememberMe)}>
                        <img src="/google.svg" alt="Google"/>
                    </button>
                    <button onClick={() => loginWithGithub(rememberMe)}>
                        <img src="/github.svg" alt="Github"/>
                    </button>
                </div>
            </div>
        </div>
    );
}
