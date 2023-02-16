import "./Home.css"
import Top from "../components/Top"
import Card from "../components/Card"
import CardStack from "../components/CardStack"
import {useState} from "react"
import {Link} from "react-router-dom"

if(!localStorage.cards) {
    localStorage.cards = "[]"
}
if(!localStorage.active) {
    localStorage.active = "-1" // -1 = inget aktivt kort
}

export default function Home() {
    const cards = JSON.parse(localStorage.cards)
    const [activeCardIndex, setActiveCardIndex] = useState(
        JSON.parse(localStorage.active))
    const unActiveCards = cards.filter((card, i) => i !== Number(activeCardIndex))

    function handleClick(nr) { // sätt klickat kort som aktivt kort
        for(let i = 0; i < cards.length; i++) {
            if(cards[i].number === nr) {
                localStorage.active = i
                setActiveCardIndex(localStorage.active) // trigga rerender
                break
            }
        }
    }

    function handleRemove() {
        if(activeCardIndex !== "-1") {
            cards.splice(activeCardIndex,1)
            localStorage.cards = JSON.stringify(cards)
            localStorage.active = "-1"
            setActiveCardIndex(-1);  // trigga rerender
        }
    }

    return (
        <div className="home">
            <Top text="E-WALLET" />
            <h5>ACTIVE CARD</h5>
            {localStorage.cards === "[]"
             ? <NoActiveCard />
             : <>
                 {activeCardIndex >=0 // om inget kort är aktivt är index = -1
                    ? <>
                        <Card data={cards[activeCardIndex]} onClick={()=>{}} />
                        <button className="button button--remove" onClick={handleRemove}>remove card</button>
                      </>
                    : <NoActiveCard />
                 }
                 <CardStack cards={unActiveCards} onClick={handleClick}/>
               </>
            }
            <Link to="/addcard"> 
                <button className="button" disabled={cards.length >= 5 && true}> 
                    {cards.length < 5
                     ? 'ADD A NEW CARD'
                     : 'MAX 5 CARDS'}
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