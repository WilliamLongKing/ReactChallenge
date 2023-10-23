// import statements
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const navigate = useNavigate();

    // state variables
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [authError, setAuthError] = useState("")
    
    // username, password validity and correctness validation
    const onLogin = () => {
        setAuthError("")
 
        if ("" === email) {
            setAuthError("Please enter your username.")
            return
        }

        if ("" === password) {
            setAuthError("Please enter a password.")
            return
        }

        // for now, hard-coded values are used for login
        // TODO: verify credentials against user data from API
        if (email !== "test" || password !== "test123!") {
            setAuthError("Username or Password is incorrect.")
            return
        } else {
            // navigate to the home page if authentication is successful
            navigate("/home")
        }
    }

    return <div className={"login"}>
        <div className={"header"}>
            <div>Sign In With</div>
        </div>
        <br/>

        <div className={"socials"}>
            <a href={"https://www.facebook.com/"} target={"_blank"}>
                <div className={"social"} id={"facebook"}>
                    <img src={"https://divainside2.files.wordpress.com/2018/09/facebook-f-logo-white-background-21.jpg"} className={"logo"}/>
                    <div>Facebook</div>
                </div>
            </a>
            <a href={"https://www.google.com/"} target={"_blank"}>
                <div className={"social"} id={"google"}>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"} className={"logo"}/>
                    <div>Google</div>
                </div>
            </a>
        </div>
        
        <div className={"error"}>
            <label className={"fieldLabel"}>{authError}</label>
        </div>
        <br/>

        <div className={"input"}>
            <label className={"fieldLabel"}>Username</label>
            <input
                value={email}
                onChange={ev => setEmail(ev.target.value)}
                className={"textField"} />
        </div>
        <br/>

        <div className={"input"}>
            <div className={"actionLabel"}>
                <label className={"fieldLabel"}>Password</label>
                <div className={"forgot"}><u>&nbsp;Forgot?</u></div>
            </div>
            <input
                value={password}
                onChange={ev => setPassword(ev.target.value)}
                className={"textField"} />
        </div>
        <br/>

        <div className={"input"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onLogin}
                value={"Sign in"} />
        </div>
        <br/>

        <div className={"signUp"}>
           <div>Not a member? <u>Sign up now</u></div>
        </div>
    </div>
}

export default Login