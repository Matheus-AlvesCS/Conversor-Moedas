async function getData() {
    try {
        const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,USD-EUR,USD-GBP,EUR-GBP").then(res => res.json())

        const dolarWorth = data.USDBRL.high
        const euroWorth = data.EURBRL.high
        const libraWorth = data.GBPBRL.high
        const dolarToEuro = data.USDEUR.high
        const dolarToLibra = data.USDGBP.high
        const euroToLibra = data.EURGBP.high

        return {
            dolarWorth, euroWorth, libraWorth, dolarToEuro, dolarToLibra, euroToLibra
        }
    } catch (error) {
        console.log("Erro ao buscar as cotações.", error.message)
        return null
    }
}

export default getData