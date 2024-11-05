const mainbtn = document.querySelector(".main-button")
const input = document.querySelector(".main-input")
const firstC = document.querySelector("#first-currency")
const secondC = document.querySelector("#second-currency")
const cv1 = document.querySelector(".currency-value1")
const cv2 = document.querySelector(".currency-value2")

function formatCurrency(value, local, currency) {
    return new Intl.NumberFormat(local, {
        style: "currency",
        currency: currency
    }).format(value)
}

cv1.innerHTML = formatCurrency(0, "pt-BR", "BRL")
cv2.innerHTML = formatCurrency(0, "en-US", "USD")

function convertCurrency() {
    const dolarWorth = 5.76
    const euroWorth = 6.23
    const libraWorth = 7.51

    if (firstC.value == "real" && secondC.value == "real") {
        cv1.innerHTML = formatCurrency(input.value, "pt-BR", "BRL")
        cv2.innerHTML = formatCurrency(input.value, "pt-BR", "BRL")
    }

    if (firstC.value == "real" && secondC.value == "dolar") {
        cv1.innerHTML = formatCurrency(input.value, "pt-BR", "BRL")
        cv2.innerHTML = formatCurrency(input.value / dolarWorth, "en-US", "USD")
    }

    if (firstC.value == "real" && secondC.value == "euro") {
        cv1.innerHTML = formatCurrency(input.value, "pt-BR", "BRL")
        cv2.innerHTML = formatCurrency(input.value / euroWorth, "es-ES", "EUR")
    }

    if (firstC.value == "real" && secondC.value == "libra") {
        cv1.innerHTML = formatCurrency(input.value, "pt-BR", "BRL")
        cv2.innerHTML = formatCurrency(input.value / libraWorth, "en-GB", "GBP")
    }

    if (firstC.value == "dolar" && secondC.value == "dolar") {
        cv1.innerHTML = formatCurrency(input.value, "en-US", "USD")
        cv2.innerHTML = formatCurrency(input.value, "en-US", "USD")
    }

    if (firstC.value == "dolar" && secondC.value == "real") {
        cv1.innerHTML = formatCurrency(input.value, "en-US", "USD")
        cv2.innerHTML = formatCurrency(input.value * dolarWorth, "pt-BR", "BRL")
    }

    if (firstC.value == "dolar" && secondC.value == "euro") {
        cv1.innerHTML = formatCurrency(input.value, "en-US", "USD")
        cv2.innerHTML = formatCurrency(input.value * 0.91, "es-ES", "EUR")
    }

    if (firstC.value == "dolar" && secondC.value == "libra") {
        cv1.innerHTML = formatCurrency(input.value, "en-US", "USD")
        cv2.innerHTML = formatCurrency(input.value * 0.77, "en-GB", "GBP")
    }

    if (firstC.value == "euro" && secondC.value == "euro") {
        cv1.innerHTML = formatCurrency(input.value, "es-ES", "EUR")
        cv2.innerHTML = formatCurrency(input.value, "es-ES", "EUR")
    }

    if (firstC.value == "euro" && secondC.value == "real") {
        cv1.innerHTML = formatCurrency(input.value, "es-ES", "EUR")
        cv2.innerHTML = formatCurrency(input.value * euroWorth, "pt-BR", "BRL")
    }

    if (firstC.value == "euro" && secondC.value == "dolar") {
        cv1.innerHTML = formatCurrency(input.value, "es-ES", "EUR")
        cv2.innerHTML = formatCurrency(input.value / 0.91, "en-US", "USD")
    }

    if (firstC.value == "euro" && secondC.value == "libra") {
        cv1.innerHTML = formatCurrency(input.value, "es-ES", "EUR")
        cv2.innerHTML = formatCurrency(input.value * 0.84, "en-GB", "GBP")
    }

    if (firstC.value == "libra" && secondC.value == "libra") {
        cv1.innerHTML = formatCurrency(input.value, "en-GB", "GBP")
        cv2.innerHTML = formatCurrency(input.value, "en-GB", "GBP")
    }

    if (firstC.value == "libra" && secondC.value == "real") {
        cv1.innerHTML = formatCurrency(input.value, "en-GB", "GBP")
        cv2.innerHTML = formatCurrency(input.value * libraWorth, "pt-BR", "BRL")
    }

    if (firstC.value == "libra" && secondC.value == "dolar") {
        cv1.innerHTML = formatCurrency(input.value, "en-GB", "GBP")
        cv2.innerHTML = formatCurrency(input.value * 1.30, "en-US", "USD")
    }

    if (firstC.value == "libra" && secondC.value == "euro") {
        cv1.innerHTML = formatCurrency(input.value, "en-GB", "GBP")
        cv2.innerHTML = formatCurrency(input.value * 1.19, "es-ES", "EUR")
    }
}

function changeCurrency() {
    const firstF = document.querySelector("#first-flag")
    const secondF = document.querySelector("#second-flag")
    const firstN = document.querySelector(".currency-name1")
    const secondN = document.querySelector(".currency-name2")

    if (firstC.value == "real") {
        firstF.src = "./assets/real.png"
        firstN.innerHTML = "Real"
    }

    if (firstC.value == "dolar") {
        firstF.src = "./assets/dolar.png"
        firstN.innerHTML = "Dólar Americano"
    }

    if (firstC.value == "euro") {
        firstF.src = "./assets/euro.png"
        firstN.innerHTML = "Euro"
    }

    if (firstC.value == "libra") {
        firstF.src = "./assets/libra.png"
        firstN.innerHTML = "Libra Esterlina"
    }

    if (secondC.value == "real") {
        secondF.src = "./assets/real.png"
        secondN.innerHTML = "Real"
    }

    if (secondC.value == "dolar") {
        secondF.src = "./assets/dolar.png"
        secondN.innerHTML = "Dólar Americano"
    }

    if (secondC.value == "euro") {
        secondF.src = "./assets/euro.png"
        secondN.innerHTML = "Euro"
    }

    if (secondC.value == "libra") {
        secondF.src = "./assets/libra.png"
        secondN.innerHTML = "Libra Esterlina"
    }

    convertCurrency()
}

mainbtn.addEventListener("click", convertCurrency)
secondC.addEventListener("change", changeCurrency)
firstC.addEventListener("change", changeCurrency)