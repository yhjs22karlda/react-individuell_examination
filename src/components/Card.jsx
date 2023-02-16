import "./Card.css"

export default function Card({data, onClick}) {
    const vendorDetails = getVendorDetails(data.vendor)
    const dummy = data.number === "XXXXXXXXXXXXXXXX"
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
            backgroundColor: vendorDetails.bgColor,
            color: vendorDetails.color,
        }
    }

    function handlePointerEnter(e) {
        if(e.currentTarget.parentElement.className === "cardstack") {
            e.currentTarget.style.transform = "translateY(-20px)"
        }
    }

    function handlePointerLeave(e) {
        if(e.currentTarget.parentElement.className === "cardstack") {
            e.currentTarget.style.transform = "translate(0px)"
        }
    }
    return (
        <section className="card" style={styles}
            onClick={() =>onClick(data.number)}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
        >
            <section className="card__icons">
                <img src={vendorDetails.wifi} alt="wifilogo" />
                {!dummy && <img src={vendorDetails.logo} alt="banklogo" />}
            </section>
            <section className="card__chip">
                <img src={chiplogo} alt="chip" />
            </section>
            <section className="card__number">
                {data.number.match(/.{4}/g).join(" ")}
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

function getVendorDetails(bank) {
    switch(bank) {
        case "Bitcoin Inc":
            return {bgColor: "#ffae34",
                    color: "black",
                    wifi: "/wifi_logo.svg",
                    logo: "/bitcoin_logo.svg"}
        case "Ninja Bank":
            return {bgColor: "#222222",
                    color: "white",
                    wifi: "wifi-light_logo.svg",
                    logo: "/ninja_logo.svg"}
        case "Block Chain Inc":
            return {bgColor: "#8b58f9",
                    color: "white",
                    wifi: "wifi-light_logo.svg",
                    logo: "/blockchain_logo.svg"}
        case "Evil Corp":
            return {bgColor: "#f33355",
                    color: "white",
                    wifi: "wifi-light_logo.svg",
                    logo: "/evilcorp_logo.svg"}
        default:
            console.log("Hit borde man inte komma");
    }
}