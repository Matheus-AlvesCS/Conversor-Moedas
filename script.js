const mainbtn = document.querySelector(".main-button")
const input = document.querySelector(".main-input")
const firstC = document.querySelector("#first-currency")
const secondC = document.querySelector("#second-currency")
const cv1 = document.querySelector(".currency-value1")
const cv2 = document.querySelector(".currency-value2")

cv1.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
}).format(0)
cv2.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
}).format(0)

function onclick() {
    const dolarToday = 5.76
    const euroToday = 6.23
    if (firstC.value == "real" && secondC.value == "dolar") {
        cv1.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(input.value)
        cv2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input.value / dolarToday)
    }

    if (firstC.value == "real" && secondC.value == "euro") {
        cv1.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(input.value)
        cv2.innerHTML = new Intl.NumberFormat("es-ES", {
            style: "currency",
            currency: "EUR"
        }).format(input.value / euroToday)
    }
}

function onchange() {
    const firstF = document.querySelector("#first-flag")
    const secondF = document.querySelector("#second-flag")
    const firstN = document.querySelector(".currency-name1")
    const secondN = document.querySelector(".currency-name2")
    if (secondC.value == "dolar") {
        secondF.src = "./assets/dolar.png"
        secondN.innerHTML = "Dólar Americano"
    }

    if (secondC.value == "euro") {
        secondF.src = "./assets/euro.png"
        secondN.innerHTML = "Euro"
    }
}

mainbtn.addEventListener("click", onclick)
secondC.addEventListener("change", onchange)