import "./Home.css"
import Top from "../components/Top"
import Card from "../components/Card"
import CardStack from "../components/CardStack"
import {Link} from "react-router-dom"

export default function Home() {

    return (
        <div className="home">
            <Top text="E-WALLET" />
            <h5>ACTIVE CARD</h5>
            <Card />
            <CardStack />
            <Link to="/addcard">
                <button>ADD A NEW CARD</button>
            </Link>
        </div>
    )
}