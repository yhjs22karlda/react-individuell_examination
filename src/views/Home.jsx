import "./Home.css"
import Top from "../components/Top"
import Card from "../components/Card"
import CardStack from "../components/CardStack"
import {useState} from "react"
import {Link} from "react-router-dom"

// TODO remove card

if(!localStorage.cards) {
    localStorage.cards = "[]"
}
if(!localStorage.active) {
    localStorage.active = "-1"
}

export default function Home() {
    const cards = JSON.parse(localStorage.cards)
    const [activeCardIndex, setActiveCardIndex] = useState(
        JSON.parse(localStorage.active))
    const unActiveCards = cards.filter((card, i) => i !== Number(activeCardIndex))
    console.log(cards,activeCardIndex, unActiveCards);

    function handleClick(nr) {
        for(let i = 0; i < cards.length; i++) {
            if(cards[i].number === nr) {
                localStorage.active = i
                setActiveCardIndex(localStorage.active) // trigger rerender
                break
            }
        }
    }

    function handleRemove() {
        if(activeCardIndex !== "-1") {
            console.log(localStorage.active,activeCardIndex);
            cards.splice(activeCardIndex,1)
            console.log(cards);
            localStorage.cards = JSON.stringify(cards)
            localStorage.active = "-1"
            setActiveCardIndex(-1);
        }
    }

    return (
        <div className="home">
            <Top text="E-WALLET" />
            {localStorage.cards === "[]"
             ? <NoActiveCard />
             : <>
                 <h5>ACTIVE CARD</h5>
                 {activeCardIndex >=0 ?
                    <Card data={cards[activeCardIndex]} onClick={()=>{}}/>:
                    <NoActiveCard />
                 }
                 {activeCardIndex >= 0 && <button onClick={handleRemove}>remove card</button>}
                 <CardStack cards={unActiveCards} onClick={handleClick}/>
               </>
            }
            <Link to="/addcard">
                <button className="button" disabled={cards.length >= 5}>
                    {cards.length < 5 ?
                    'ADD A NEW CARD':
                    'MAX 5 CARDS'}
                </button>
            </Link>
        </div>
    )
}

function NoActiveCard() {
    return (
        <article className="empty">
            No active card!
        </article>
    )
}