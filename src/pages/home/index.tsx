import {Header} from "../../components/header/header.tsx";
import {Footer} from "../../components/footer/footer.tsx";
import "./home.css";

export function Home() {
    return (
        <div className="App">
            <Header/>

            <div className="home">
                <span>Send a Message to Every One You Like!</span>
                <span>Create Groups With You Friends!</span>
                <span>All of That and More</span>
                <button>Give a Try</button>
            </div>

            <Footer/>
        </div>
    );
}