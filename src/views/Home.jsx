import "./Home.css"
import Top from "../components/Top"
import Card from "../components/Card"
import CardStack from "../components/CardStack"
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

// TODO validation function, CardStack, remove card

if(!localStorage.cards) {
    localStorage.cards = "[]"
}
if(!localStorage.active) {
    localStorage.active = "0"
}

export default function Home() {
    const cards = JSON.parse(localStorage.cards)
    const activeCard = JSON.parse(localStorage.active)
    console.log(cards)

    return (
        <div className="home">
            <Top text="E-WALLET" />
            {localStorage.cards === "[]"
             ? <article className="empty">
                   No added cards!
               </article>
             : <>
                 <h5>ACTIVE CARD</h5>
                 <Card data={cards[activeCard]} />
                 <CardStack />
               </>
            }
            <Link to="/addcard">
                <button>ADD A NEW CARD</button>
            </Link>
        </div>
    )
}
