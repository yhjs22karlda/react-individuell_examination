import "./CardForm.css"

export default function CardForm() {

    return (
        <form className="form">
            <label>
                CARD NUMBER
                <input type="text" />
            </label>
            <label>
                CARDHOLDER NAME
                <input type="text" placeholder="FIRSTNAME LASTNAME"/>
            </label>
            <div className="half-label">
                <label>
                    VALID THRU
                    <input type="text" />
                </label>
                <label>
                    CCV
                    <input type="text" />
                </label>
            </div>
            <label>
                VENDOR
                <select>
                    <option></option>
                    <option>Bitcoin Inc</option>
                    <option>Ninja Bank</option>
                    <option>Block Chain Inc</option>
                    <option> Evil Corp</option>
                </select>
            </label>
        </form>
    )
}