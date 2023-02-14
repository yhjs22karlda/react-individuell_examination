import "./AddCard.css"
import {dummyCard} from "../assets/utils"
import Top from "../components/Top"
import Card from "../components/Card"
import CardForm from "../components/CardForm"
import {useState} from "react"
import {Link} from "react-router-dom"


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
            {message && 
                <div className="message">
                    <div>{message}</div>
                </div>
            }
            <CardForm setMessage={setMessage}/>
        </article>

    )
}
