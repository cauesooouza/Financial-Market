export const getAvailableStocks = async () => {
    const result = await fetch('https://brapi.dev/api/available')
        .then(response => response.json())
        .catch(error => console.error(error))
        .then(data => data['stocks'])

    return result
}