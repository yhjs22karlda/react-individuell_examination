export const dummyCard = {
    number: "XXXXXXXXXXXXXXXX",
    name: "FIRSTNAME LASTNAME",
    valid: "MM/YY",
    ccv: "",
    vendor: "Bitcoin Inc"
}

export function validateForm(form) {
    const messages = []
    const numberFormat = /^\d{16}$/
    const validThruFormat = /(^0[1-9]\/\d\d$)|(^1[0-2]\/\d\d$)/
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

export function getVendorDetails(bank) {
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

export function handlePointerEnter(e) {
    if(e.currentTarget.parentElement.className === "cardstack") {
        e.currentTarget.style.transform = "rotate(0deg) translateY(-20px) scale(1)"
    }
}

export function handlePointerLeave(e) {
    if(e.currentTarget.parentElement.className === "cardstack") {
        e.currentTarget.style.transform = "rotate(0deg)"
    }
}