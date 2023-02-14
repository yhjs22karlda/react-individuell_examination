import "./Card.css"
import {getVendorDetails} from "../assets/utils"

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
            color: vendorDetails.color
        }
    }

    return (
        <section className="card" style={styles} onClick={() =>onClick(data.number)}>
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
