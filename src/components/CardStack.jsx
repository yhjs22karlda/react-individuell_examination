import "./CardStack.css"
import Card from './Card'

export default function CardStack({cards, onClick}) {
    // console.log(cards);

    return (
        <section className="cardstack">
            {cards.map(card => (
                <Card key={card.number} data={card} onClick={onClick}/>
            ))}
        </section>
    )
}