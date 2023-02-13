import "./AddCard.css"
import Top from "../components/Top"
import Card from "../components/Card"
import CardForm from "../components/CardForm"
import {Link} from "react-router-dom"

export default function AddCard() {

    return (
        <article className="add-card">
            <Top text="ADD A NEW BANK CARD" />
            <h5>NEW CARD</h5>
            <Card />
            <CardForm />
            <Link to="/">
                <button>ADD CARD</button>
            </Link>
        </article>

    )
}