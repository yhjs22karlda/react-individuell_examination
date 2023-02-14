import "./CardStack.css"
import Card from './Card'

export default function CardStack({cards, onClick}) {
    let height = `${200 + (cards.length * 50)}px`

    return (
        <section className="cardstack" style={{height:height}}>
            {cards.map(card => (
                <Card key={card.number} data={card} onClick={onClick} />
            ))}
        </section>
    )
}