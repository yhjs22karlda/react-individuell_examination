import "./AddCard.css"
import Top from "../components/Top"
import Card from "../components/Card"
import CardForm from "../components/CardForm"
import {useState} from "react"
import {Link} from "react-router-dom"

const dummyCard = {
    number: "XXXX XXXX XXXX XXXX",
    name: "FIRSTNAME LASTNAME",
    valid: "MM/YY",
    ccv: "",
    vendor: "Bitcoin Inc"
}

export default function AddCard() {
    const [message, setMessage] = useState()
    return (
        <article className="add-card">
            <Link to="/" className="go-back">
                <img src="/Back-Arrow.svg" alt="backarrow" />
            </Link>
            <Top text="ADD A NEW BANK CARD" />
            <h5>NEW CARD</h5>
            <Card data={dummyCard} />
            {message && <ErrorMessage message={message} />}
            <CardForm setMessage={setMessage}/>
        </article>

    )
}

function ErrorMessage({message}) {

    return (
        <div className="message">
            <div>{message}</div>
        </div>
    )
}