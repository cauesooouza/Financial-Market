const requestApi = async () => {
    let result = await fetch('https://brapi.dev/api/v2/currency/available?search=-BRL')
        .then(response => response.json())
        .catch(error => console.log(error))
        .then(data => data.currencies)

    return result;
}

const gettingNames = async () => {
    const data = await requestApi();
    let brazilianCurrenciesNames;

    brazilianCurrenciesNames = await data.map(element => element.name)

    let stringNames = await brazilianCurrenciesNames.toString();
    let correctString = await stringNames.replace(/,/g, "%2C");

    return correctString;
}

const extractNamePrice = (prop) => {
    const { fromCurrency, bidPrice, name } = prop;
    return { fromCurrency, bidPrice, name }
}

export const gettingCurrency = async () => {
    let currencyNames = await gettingNames();

    let requestCurrency = await fetch(`https://brapi.dev/api/v2/currency?currency=${currencyNames}`)
        .then(response => response.json())
        .then(data => data.currency)

    const currencyData = await requestCurrency.map(extractNamePrice);

    return currencyData
}