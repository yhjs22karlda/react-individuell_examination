import "./CardForm.css"
import {useState} from "react"
import {useNavigate} from "react-router-dom"

export const initialFormData = {
    number: "",
    name: "",
    valid: "",
    ccv: "",
    vendor: ""
}

export default function CardForm({setMessage}) {
    const [formData, setFormData] = useState(initialFormData)

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
        if(cards.length > 0) {
            if(cards.some(card => card.number === formData.number)) {
                setMessage("A card with same number already added")
                return
            }
        }
        let validated = validateForm(formData)
        if(validated !== true) {
            setMessage("Det blev fel")
            return
        }
        cards.push(formData)
        localStorage.cards = JSON.stringify(cards)
        console.log(JSON.parse(localStorage.cards));
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
    return true
}