import "./header.css";

interface HomeHeaderProps {
    logged?: boolean;
}

export function Header({ logged = false }: Readonly<HomeHeaderProps>) {
    let aux = (
        <div className="sign-in-up">
            <button className="sign-in">Sign-in</button>
            <button className="sign-up">Sign-up</button>
        </div>
    );

    if (logged) {
        aux = (
            <div className="profile-pic">
                <img src="/blank-profile-pic.png" alt="Profile Pic"/>
            </div>
        );
    }

    return (
        <div className="home-header">
            <header>
                <div className="logo">
                    <img src="/logo.png" alt="Logo" />
                    <span>WhatsNew</span>
                </div>
                {aux}
            </header>
        </div>
    );
}
