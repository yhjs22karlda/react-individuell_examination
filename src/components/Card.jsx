import "./Card.css"

export default function Card() {

    return (
        <section className="card">
            <section className="card__icons">
                <img src="/wifi_logo.svg" alt="wifilogo" />
                <img src="/bitcoin_logo.svg" alt="bitcoinlogo" />
            </section>
            <section className="card__chip">
                <img src="chip_logo.svg" alt="chip" />
            </section>
            <section className="card__number">
                XXXX&nbsp;XXXX&nbsp;XXXX&nbsp;XXXX
            </section>
            <section className="card__text">
                <p>CARDHOLDER NAME</p>
                <p>VALID THRU</p>
            </section>
            <section className="card__name">
                <p>FIRSTNAME LASTNAME</p>
                <p>MM/YY</p>
            </section>
        </section>
    )
}