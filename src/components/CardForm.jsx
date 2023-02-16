import "./CardForm.css"
import {useState} from "react"
import {useNavigate} from "react-router-dom"

export default function CardForm({setMessage}) {
    const [formData, setFormData] = useState({
        number: "",
        name: "",
        valid: "",
        ccv: "",
        vendor: ""
    })
    const navigate = useNavigate()

    function handleFormData(e) {
        setFormData(fd => ({
            ...fd,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        let cards = JSON.parse(localStorage.cards)
        if(cards.length > 0) { // endast 1 kort med samma nummer tillåtet
            if(cards.some(card => card.number === formData.number)) {
                setMessage(["A card with same number already added"])
                return
            }
        }
        let validated = validateForm(formData)
        if(validated !== true) { // kortet måste klara valideringen
            setMessage(validated)
            return
        }
        if(cards.length === 0) { // om det är första kortet, gör det aktivt
            localStorage.active = "0"
        }
        cards.push(formData)
        localStorage.cards = JSON.stringify(cards)
        navigate("/")
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label>
                CARD NUMBER
                <input
                    type="text"
                    name="number"
                    value={formData.number}
                    onChange={handleFormData}
                />
            </label>
            <label>
                CARDHOLDER NAME
                <input
                    type="text"
                    placeholder="FIRSTNAME LASTNAME"
                    name="name"
                    value={formData.name}
                    onChange={handleFormData}
                />
            </label>
            <div className="half-label">
                <label>
                    VALID THRU
                    <input
                        type="text"
                        placeholder="MM/YY"
                        name="valid"
                        value={formData.valid}
                        onChange={handleFormData}
                    />
                </label>
                <label>
                    CCV
                    <input
                        type="text"
                        name="ccv"
                        value={formData.ccv}
                        onChange={handleFormData}
                    />
                </label>
            </div>
            <label>
                VENDOR
                <select
                    name="vendor"
                    value={formData.vendor}
                    onChange={handleFormData}
                >
                    <option></option>
                    <option>Bitcoin Inc</option>
                    <option>Ninja Bank</option>
                    <option>Block Chain Inc</option>
                    <option>Evil Corp</option>
                </select>
            </label>
            <button>ADD CARD</button>
        </form>
    )
}

function validateForm(form) {
    const messages = []
    const numberFormat = /^\d{16}$/
    const validThruFormat = /(^0[1-9])|(^1[0-2])\/\d\d$/
    const ccvFormat = /^\d\d\d$/

    if(!numberFormat.test(form.number)) {
        messages.push("Card number should be 16 digits")
    }
    if(form.name.length > 22 || form.name.length < 2) {
        messages.push("Name should be 2 to 22 characters")
    }
    if(!validThruFormat.test(form.valid)) {
        messages.push("Valid Thru format is: MM/YY")
    }
    if(!ccvFormat.test(form.ccv)) {
        messages.push("CCV should be 3 digits")
    }
    if(form.vendor === "") {
        messages.push("You must choose a vendor")
    }
    if(messages.length > 0) {
        return messages
    } else {
        return true
    }
}