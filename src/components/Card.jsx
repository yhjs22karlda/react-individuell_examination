import "./Card.css"
import {getCardDetails} from "../assets/utils"

export default function Card({data}) {
    const cardDetails = getCardDetails(data.vendor)
    const dummy = data.number === "XXXX XXXX XXXX XXXX"
    let styles = {}
    let chiplogo = "/chip_logo.svg"

    if(dummy) {
        chiplogo = "/chip-dark_logo.svg"
        styles = {
            backgroundColor: "#d0d0d0",
            color: "black"
        }
    } else {
        styles = {
            backgroundColor: cardDetails.bgColor,
            color: cardDetails.color
        }
    }

    return (
        <section className="card" style={styles}>
            <section className="card__icons">
                <img src={cardDetails.wifi} alt="wifilogo" />
                {!dummy && <img src={cardDetails.logo} alt="banklogo" />}
            </section>
            <section className="card__chip">
                <img src={chiplogo} alt="chip" />
            </section>
            <section className="card__number">
                {data.number}
            </section>
            <section className="card__text">
                <p>CARDHOLDER NAME</p>
                <p>VALID THRU</p>
            </section>
            <section className="card__name">
                <p>{data.name.toUpperCase()}</p>
                <p>{data.valid}</p>
            </section>
        </section>
    )
}
