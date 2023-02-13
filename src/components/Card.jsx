import "./Card.css"

export default function Card({data}) {
    const cardDetails = getCardDetails(data.vendor)
    const dummy = data.number === "XXXX XXXX XXXX XXXX"
    let styles = {}

    if(dummy) {
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
                <img src={cardDetails.chip} alt="chip" />
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

function getCardDetails(bank) {
    switch(bank) {
        case "Bitcoin Inc":
            return {bgColor: "#ffae34",
                    color: "black",
                    wifi: "/wifi_logo.svg",
                    chip: "/chip-dark_logo.svg",
                    logo: "/bitcoin_logo.svg"}
        case "Ninja Bank":
            return {bgColor: "#222222",
                    color: "white",
                    wifi: "wifi-light_logo.svg",
                    chip: "/chip_logo.svg",
                    logo: "/ninja_logo.svg"}
        case "Block Chain Inc":
            return {bgColor: "#8b58f9",
                    color: "white",
                    wifi: "wifi-light_logo.svg",
                    chip: "/chip_logo.svg",
                    logo: "/blockchain_logo.svg"}
        case "Evil Corp":
            return {bgColor: "#f33355",
                    color: "white",
                    wifi: "wifi-light_logo.svg",
                    chip: "/chip_logo.svg",
                    logo: "/evilcorp_logo.svg"}
        default:
            console.log("Hit borde man inte komma");
    }
}