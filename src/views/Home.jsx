import "./Home.css"
import Top from "../components/Top"
import Card from "../components/Card"
import CardStack from "../components/CardStack"
import {useState} from "react"
import {Link} from "react-router-dom"

// TODO CardStack, remove card

if(!localStorage.cards) {
    localStorage.cards = "[]"
}
if(!localStorage.active) {
    localStorage.active = "0"
}

export default function Home() {
    const cards = JSON.parse(localStorage.cards)
    const [activeCardIndex, setActiveCardIndex] = useState(
        JSON.parse(localStorage.active))
    const unActiveCards = cards.filter((card, i) => i !== Number(activeCardIndex))

    function handleClick(nr) {
        for(let i = 0; i < cards.length; i++) {
            if(cards[i].number === nr) {
                localStorage.active = i
                setActiveCardIndex(localStorage.active) // trigger rerender
                break
            }
        }
    }

    return (
        <div className="home">
            <Top text="E-WALLET" />
            {localStorage.cards === "[]"
             ? <article className="empty">
                   No active card!
               </article>
             : <>
                 <h5>ACTIVE CARD</h5>
                 <Card data={cards[activeCardIndex]} onClick={()=>{}}/>
                 <CardStack cards={unActiveCards} onClick={handleClick}/>
               </>
            }
            <Link to="/addcard">
                <button>ADD A NEW CARD</button>
            </Link>
        </div>
    )
}
