import "./footer.css"


export function Footer() {
    return (
        <div className="home-footer">
            <footer>
                <div className="footer-text">
                    <span>All rights reserved © 2025</span>
                    <span>Eurico Gabriel Vasconcelos Pereira</span>
                </div>
                <div className="footer-logos">
                    <a href="https://github.com/Eurico149">
                        <img src="/github.svg" alt="Github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/euricogvp/">
                        <img src="/linkedin.svg" alt="Linkedin"/>
                    </a>
                    <a href="https://www.instagram.com/eurico_gabriel149/">
                        <img src="/instagram.svg" alt="Instagram"/>
                    </a>
                </div>
            </footer>
        </div>
    );
}