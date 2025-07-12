import "./header.css"


export function Header() {
    return (
        <div className="home-header">
            <header>
                <div className="logo">
                    <img src="/public/logo.png" alt="Logo"/>
                    <span>WhatsNew</span>
                </div>
                <div className="sign-in-up">
                    <button className="sign-in">Sign-in</button>
                    <button className="sign-up">Sign-up</button>
                </div>
            </header>
        </div>
    );
}
