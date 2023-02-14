export const dummyCard = {
    number: "XXXX XXXX XXXX XXXX",
    name: "FIRSTNAME LASTNAME",
    valid: "MM/YY",
    ccv: "",
    vendor: "Bitcoin Inc"
}

export function validateForm(form) {
    return true
}

export function getCardDetails(bank) {
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